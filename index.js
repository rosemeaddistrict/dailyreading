function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

const title = "本周(10.13.2024 - 10.19.2024)晨兴与读经进度"
const morning_revival_book_title = "2024年国殇节特会 基督徒的生活"
const morning_revival_this_week = `<a>第二周 接枝的生命</a>`
const morning_revival_link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.03.%E5%9B%BD%E6%AE%87%E8%8A%82%E7%89%B9%E4%BC%9A:%E7%AC%AC%E4%BA%8C%E5%91%A8"
const youtube = `<br><iframe width="400" height="225" src="https://www.youtube.com/embed/YKEQfwRU0WQ?si=JFtJ8U4B_sl7fD6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

const old_test1 = "约书亚记" 
const new_test1 = "希伯来书"


var ti = title
$('title').text(ti)
$('h1').text(ti)
//Morning Revival
$('.div1 > .sub').text("晨兴圣言")
var book = "书目：" + morning_revival_book_title
$('.div1 > h3 > ul > .p1').text(book)
ti = "进度："
var content = morning_revival_this_week
var link = morning_revival_link
var elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
elem = '.div1 > h3 > ul > .p3'
$(elem).text("晨兴圣言申言示范")
$(elem).append(youtube)

//Bible
$('.div2 > .sub').text("圣经")

ti = "旧约：" + old_test1
content = " <a>第19~23章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=6&f_ChapterNo=19"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > .p1'
updatePointContent(elem, ti, content, link)

ti = "新约：" + new_test1
content = " <a>第2~6章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=58&f_ChapterNo=2"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > .p1'
updatePointContent(elem, ti, content, link)

//Life Study
newTest = "歌罗西书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = 'https://simplified.lsmchinese.org/lifestudy/col-idx.html'
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期: 10/17/2024"
$('.div3 > h3 > ul > .p2').text(ti)
ti = '展览范围：<a href="./Lifestudy.html">歌罗西书生命读经第17至24篇</a> <a href="https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=51&f_ChapterNo=2">(歌罗西书章二1~22节)</a>'
$('.div3 > h3 > ul > .p3').html(ti)
