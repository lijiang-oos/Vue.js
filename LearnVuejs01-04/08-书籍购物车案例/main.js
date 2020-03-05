const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《unix编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-03',
                price: 128.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(index) {
            this.books[index].count++

        },
        deincrement(index) {
            this.books[index].count--

        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            //1、for循环最普通的用法
            let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            //
            // }
            // 2、（for (let  i in this.books） i 是books 的索引
            // for (let i in this.books) {
            //     console.log("books的索引：",i);
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            //    3、（for (let item of this.books)）可以直接取出books里面的每个元素
            // for (let item of this.books) {
            //     console.log("books里面的每个元素：", item);
            //     totalPrice += item.price * item.count;
            // }
            // return totalPrice;

            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count;

            }, 0);

        }
    },
    //过滤器，toFixed 是让显示所有, 2 是让保留两位小数
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);

        }
    }
});
//    编程范式：命令式编程/声明式编程
//    编程范式：面向对象编程（第一公民：对象 ）/函数式编程（第一公民是：函数）
//    filter/map/reduce
//    filter中的回调函数有一个要求：必须返回一个boolean值
//     true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//     false:当返回false时，函数内部会过滤掉这次的n
const nums = [10, 20, 111, 222, 444, 40, 50];

let new4NUms = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n)
console.log(new4NUms);
let new1Nums = nums.filter(function (n) {
    return n < 100

}).map(function (n) {
    return n * 2

}).reduce(function (preValue, n) {
    return preValue + n

}, 0);
console.log(new1Nums);
//1、filter函数的调用
//10,20,30,40
let newNums = nums.filter(function (n) {
    return n < 100

});
// console.log(newNums);
// 2、map函数的调用
//20,40,80,100
let new2Nums = newNums.map(function (n) {
    return n * 2

});
console.log(new2Nums);
//3、reduce函数的调用
//reduce 函数对所有的内容进行汇总
let new3Nums = new2Nums.reduce(function (preValue, n) {
    return preValue + n;

}, 0);
console.log(new3Nums);
// 第一次：preValue 0  n 20
// 第二次：preValue 20 n 40
// 第三次： preValue 60 n 80
// 第四次 ： preValue 140 n 100
//最终： 240
// //    1、需求：取出所有小于100的数字
// let newNums = [];
// for (let n of nums) {
//     if (n < 100) {
//         console.log(n);
//         newNums.push(n);
//     }
// }
// console.log(newNums);
// // 2、需求：取出的数全部*2
//
// let new2Nums = [];
// for (let n of newNums) {
//     new2Nums.push(n * 2);
// }
// console.log(new2Nums);
// //3、需求：将new2Nums数字相加，得到最终的记过
// let total = 0;
// for (let n of new2Nums) {
//     total += n;
// }
// console.log('和为：', total);





