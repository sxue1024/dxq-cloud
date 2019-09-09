// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  if(event.first_type === 0 || 1){
    return {
      publish_list: await db.collection('publish_collection').where({
        school_id: event.school_id,
        publish_type: event.publish_type,
        first_type: event.first_type,
        second_type: event.second_type
      }).orderBy('publish_time', 'desc').get()
    }
  } else {
    return {
      publish_list: await db.collection('publish_collection').where({
        school_id: event.school_id,
        publish_type: event.publish_type
      }).orderBy('publish_time', 'desc').get()
    }
  }
}