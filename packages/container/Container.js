let instance;

'use strict';

/**
 * @class Container
 */
export default class Container {
	static instance(){
		if (!instance) {
        	instance = new Container();
    	}
    	return instance;
	}

    
    /**
     *
     * @param {EventEmitter} ee
     */
    constructor(ee) {
        this.bindings = {};
        this.resolved = {};
        this.ee       = ee;
    }

    /**
     * Register a factory of a dependency to the Container
     *
     * @param {string} dependencyName
     * @param {Function} factory
     * @returns {Container}
     */
    bind(dependencyName, factory) {
        this.bindings[dependencyName] = {
            factory: factory,
            type: 'binding'
        };

        return this;
    }

    /**
     * Register a value as a dependency to the Container
     *
     * @param {string} dependencyName
     * @param value
     * @return {Container}
     */
    value(dependencyName, value) {
        this.resolved[dependencyName] = value;

        return this;
    }

    /**
     * Register a dependency to the Container as a singleton
     *
     * @param {string} dependencyName
     * @param {Function} factory
     * @returns {Container}
     */
    singleton(dependencyName, factory) {
        this.bindings[dependencyName] = {
            factory: factory,
            type: 'singleton'
        };

        return this;
    }

    /**
     * Resolve a dependency
     *
     * @param {string} dependencyName
     * @returns {Promise.<*>}
     */
    async make(dependencyName) {

        if (this.resolved[dependencyName]) {
            return this.resolved[dependencyName];
        }

        let bindingRecipe = this.bindings[dependencyName];

        if (!bindingRecipe) {
            throw new Error(`E_BINDING: Could not resolve dependency [${dependencyName}]`);
        }

        let resolved = await bindingRecipe['factory'](this);
        
        if ('singleton' == bindingRecipe['type']) {
            this.resolved[dependencyName] = resolved
        }

        return resolved;
    }

    /**
     * Register an event listener to the Container
     * to handle right before resolving a dependency
     *
     * @param {string} dependencyName
     * @param {Function} handler
     * @return {Container}
     */
    making(dependencyName, handler) {
        this.ee.on(`${dependencyName}.making`, handler);

        return this;
    }

    /**
     * Register an event listener to the Container
     * to handle right after resolved a dependency
     *
     * @param {string} dependencyName
     * @param {Function} handler
     * @return {Container}
     */
    made(dependencyName, handler) {
        this.ee.on(`${dependencyName}.made`, handler);

        return this;
    }
}