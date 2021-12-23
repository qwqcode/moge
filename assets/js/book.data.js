;(function() {
    const bookName = getQueryParam('name')

    const book = BOOKS.find(o => o.name === bookName)
    console.log(book)

    const $main = document.querySelector('.main')
    const $bookName = $main.querySelector('.book-name')
    const $coverImg = $main.querySelector('.book-info .cover img')
    const $details = $main.querySelector('.details')
    const $star = $main.querySelector('.star')
    const $starText = $star.querySelector('.score .text')
    const $starIcon = $star.querySelector('.icon-stars')
    const $starCount = $star.querySelector('.icon .count')
    const $content = $main.querySelector('.book-related .content')

    // 图书信息
    $bookName.innerText = book.name
    $coverImg.src = './assets/img/books/'+encodeURIComponent(book.name)+'.jpg'

    $details.querySelectorAll('[data-bind]').forEach($el => {
        const field = $el.getAttribute('data-bind')
        if (!field) return
        $el.innerText = book[field] || '未知'
    })

    // 评分
    $starText.innerText = book.score
    $starIcon.classList.add(`stars-${book.star}`)
    $starCount.innerText = book.commentCount + '人评价'

    // 内容简介
    $content.innerHTML = book.desc.replace(/\S+/g, '<p>$&</p>')
})()