// 预先定义好的食材烫煮所需时间
// 按 name = 食材名称 boilTime = 烫煮时间（秒） type = 食材种类 写入

const predefined = [{
// 肉类，就是各种肉类
  name: '肥牛',
  boilTime: 30,
  type: '肉类'
}, {
  name: '老肉片(厚)',
  boilTime: 10 * 60,
  type: '肉类'
}, {
  name: '老肉片(薄)',
  boilTime: 2 * 60,
  type: '肉类'
}, {
  name: '香菜丸子',
  boilTime: 5 * 60,
  type: '肉类'
// 内脏制品，鸡鸭猪牛羊的内脏，例如毛肚（牛的胃） 
}, {
  name: '毛肚',
  boilTime: 20,
  type: '内脏及其制品'
}, {
  name: '腰花(腰片)',
  boilTime: 5 * 60,
  type: '内脏及其制品'
}, {
  name: '鸡胗',
  boilTime: 20,
  type: '内脏及其制品'
// 水产(荤），水里的动物制品
}, {
  name: '虾滑',
  boilTime: 3 * 60,
  type: '水产(荤)'
}, {
  name: '河虾',
  boilTime: 2 * 60,
  type: '水产(荤)'
// 
}, {
  name: '海白菜',
  boilTime: 5 * 60,
  type: '水产(素)'
}];

export { predefined };