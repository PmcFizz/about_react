/**
 * action 类型
 */
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

/**
 * action创建函数
 * @param {} categoryNum 
 */
export function changeCategory(categoryNum) {
  return {
    type: CHANGE_CATEGORY,
    categoryNum: categoryNum
  }
}