(function() {
    const $tagBooks = document.querySelector('.tag-books')
    const $tpl = $tagBooks.querySelector('.book-item').cloneNode(true)
    
    $tagBooks.innerHTML = ''

    BOOKS.forEach((book) => {
        const $booItem = $tpl.cloneNode(true)
        const $coverImg = $booItem.querySelector('.cover img')
        const $name = $booItem.querySelector('.name')
        const $meta = $booItem.querySelector('.meta')
        const $score = $booItem.querySelector('.score')
        const $iconStars = $booItem.querySelector('.icon-stars')
        const $desc = $booItem.querySelector('.desc')

        // 图片
        $coverImg.src = './assets/img/books/'+encodeURIComponent(book.name)+'.jpg'
        
        // 书名
        $name.innerText = book.name

        // 信息
        $meta.innerText = `${book.author} / ${book.press} / ${book.pressYear} / ${book.price}`
        
        // 评分
        $score.innerText = book.score
        $iconStars.classList.add(`stars-${book.star}`)
        
        // 简介
        $desc.innerText = book.desc.replaceAll('\n', '').substring(0, 100) + '...'
        
        $tagBooks.append($booItem)
    })
})()
