function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

var ti = "本周(6.24.2024 - 6.28.2024)晨兴与读经进度"
$('title').text(ti)
$('h1').text(ti)
//Morning Revival
$('.div1 > .sub').text("晨兴圣言")
var book = "书目：" + "经营美地所预表包罗万有的基督，为着建造召会作基督的身体，为着国度的实际与实现，并为着新妇得以为主的来临将自己预备好(2023年冬季训练)"
$('.div1 > h3 > ul > .p1').text(book)
ti = "进度："
var content = "<a>第七周 认识升天</a>"
var link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2023:2023.07.%E5%86%AC%E5%AD%A3%E8%AE%AD%E7%BB%83:%E7%AC%AC%E4%B8%83%E5%91%A8"
var elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
//Bible
var oldTest = "民数记"
var newTest = "罗马书"
$('.div2 > .sub').text("圣经")
ti = "旧约：" + oldTest
content = " <a>第9~13章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=4&f_ChapterNo=9&f_VerseNo=1"
elem = '.div2 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "新约：" + newTest
content = " <a>第9~13章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=45&f_ChapterNo=9&f_VerseNo=1"
elem = '.div2 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列认识基督系列："
content = "<a>" + oldTest + "</a>"
link = "https://substantial-baboon-a7f.notion.site/eecc41f80c404494b4faaec0088ea8b2"
elem = '.div2 > h3 > ul > .p3'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列认识基督系列："
content = "<a>" + newTest + "</a>"
link = "https://shard-desk-771.notion.site/8c64d024703f43b2a7ad8c8a665c9e64"
elem = '.div2 > h3 > ul > .p4'
updatePointContent(elem, ti, content, link)
ti = "新约圣经导读："
content = "<a>" + newTest + "</a>"
link = "https://xinrenfuyin.org/?page_id=10686"
elem = '.div2 > h3 > ul > .p5'
updatePointContent(elem, ti, content, link)
//Life Study
newTest = "歌罗西书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = "http://www.life-study1984.org/schedule/schedule.php?bookno=51-Y"
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期：8/15/2024"
$('.div3 > h3 > ul > .p2').text(ti)
ti = "展览范围：歌罗西书生命读经第1至8篇"
$('.div3 > h3 > ul > .p3').text(ti)
// for new one
$('.div4 > .sub').text("新人喂养")
ti = "初信喂养系列："
content = "<a>" + "第1~12周" + "</a>"
link = "https://e-shepherding.org/%e5%88%9d%e4%bf%a1%e5%96%82%e5%85%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac1-12%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "初信喂养系列："
content = "<a>" + "第13~24周" + "</a>"
link = "https://e-shepherding.org/%e5%88%9d%e4%bf%a1%e5%96%82%e5%85%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac1324%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
ti = "召会生活系列："
content = "<a>" + "第25~36周" + "</a>"
link = "https://e-shepherding.org/%e5%8f%ac%e4%bc%9a%e7%94%9f%e6%b4%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac2536%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p3'
updatePointContent(elem, ti, content, link)
ti = "福音生活系列："
content = "<a>" + "第37~48周" + "</a>"
link = "https://e-shepherding.org/%e7%a6%8f%e9%9f%b3%e7%94%9f%e6%b4%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac3748%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p4'
updatePointContent(elem, ti, content, link)
// hymns
$('.div5 > .sub').text("诗歌")
ti = ""
content = "<a>" + "诗歌集" + "</a>"
link = "https://chenin0423.github.io/myhymns/"
elem = '.div5 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)

