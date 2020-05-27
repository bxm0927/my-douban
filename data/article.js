let moment = require('../utils/moment.js')

let articleData = [
  {
    id: 0,
    title: 'Lorem ipsum dolor.',
    author: 'Tomi',
    time: moment().format('MMMM Do YYYY'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quis architecto porro, nihil id tenetur ipsum vel temporibus ipsa suscipit pariatur eveniet blanditiis neque vero tempore, nam voluptas, quod, velit rem animi sapiente perspiciatis minus alias natus. Est consequuntur consequatur facilis officiis, voluptates nostrum cupiditate reprehenderit numquam tempora eligendi repudiandae officia odit blanditiis saepe tenetur inventore laudantium at assumenda suscipit dolore sequi eos praesentium ipsum quisquam? Veniam, eveniet, dolor. Temporibus nesciunt vel totam, perspiciatis reprehenderit, beatae reiciendis maxime tenetur! Animi veritatis quae officia doloribus eaque quisquam, nulla aliquam deleniti velit aspernatur expedita dolorem eos qui eius itaque, distinctio nihil maxime!',
    favtext: 92,
    comtext: 66,
    img: {
      avatar: '/img/avatar/timg.jpg',
      articleimage: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor.',
    author: 'Stev',
    time: moment().format('MMMM Do YYYY'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quis architecto porro, nihil id tenetur ipsum vel temporibus ipsa suscipit pariatur eveniet blanditiis neque vero tempore, nam voluptas, quod, velit rem animi sapiente perspiciatis minus alias natus. Est consequuntur consequatur facilis officiis, voluptates nostrum cupiditate reprehenderit numquam tempora eligendi repudiandae officia odit blanditiis saepe tenetur inventore laudantium at assumenda suscipit dolore sequi eos praesentium ipsum quisquam? Veniam, eveniet, dolor. Temporibus nesciunt vel totam, perspiciatis reprehenderit, beatae reiciendis maxime tenetur! Animi veritatis quae officia doloribus eaque quisquam, nulla aliquam deleniti velit aspernatur expedita dolorem eos qui eius itaque, distinctio nihil maxime!',
    favtext: 23,
    comtext: 6,
    img: {
      avatar: '/img/avatar/timg (1).jpg',
      articleimage: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    }
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor.',
    author: 'Any',
    time: moment().format('MMMM Do YYYY'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quis architecto porro, nihil id tenetur ipsum vel temporibus ipsa suscipit pariatur eveniet blanditiis neque vero tempore, nam voluptas, quod, velit rem animi sapiente perspiciatis minus alias natus. Est consequuntur consequatur facilis officiis, voluptates nostrum cupiditate reprehenderit numquam tempora eligendi repudiandae officia odit blanditiis saepe tenetur inventore laudantium at assumenda suscipit dolore sequi eos praesentium ipsum quisquam? Veniam, eveniet, dolor. Temporibus nesciunt vel totam, perspiciatis reprehenderit, beatae reiciendis maxime tenetur! Animi veritatis quae officia doloribus eaque quisquam, nulla aliquam deleniti velit aspernatur expedita dolorem eos qui eius itaque, distinctio nihil maxime!',
    favtext: 211,
    comtext: 90,
    img: {
      avatar: '/img/avatar/timg (2).jpg',
      articleimage: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    }
  }
]

module.exports = {
  articleData
}
