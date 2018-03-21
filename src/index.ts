/* tslint:disable */
import { SetEntitiesAction, UnsetEntitiesAction } from './actions'
import { entitiesKey } from './state'
import { entitiesReducer } from './reducer'

import { createActions } from './create-actions'
import { createActionMatchers } from './create-action-matchers'
import { createSelectors } from './create-selectors'
/* tslint:enable */

export function createEntityHelpers<TEntity extends object> (type: string | symbol) {
  return {
    matchers: createActionMatchers<TEntity>(type),
    actions: createActions<TEntity>(type),
    selectors: createSelectors<TEntity>(type)
  }
}

export { createActions } from './create-actions'
export { createActionMatchers } from './create-action-matchers'
export { createSelectors } from './create-selectors'

export const entities = {
  [entitiesKey]: entitiesReducer
}

export { entitiesReducer } from './reducer'
export { entitiesKey } from './state'

export * from './loadable'
