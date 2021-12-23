document.addEventListener('DOMContentLoaded', () => {
    /** 导航栏 Logo 动画 */
    const $navbar = document.querySelector('.navbar')
    const $logo = document.querySelector('.navbar .logo')
    $navbar.onmouseover = () => {
        $logo.style.backgroundImage = `url('./assets/img/logo-motion.gif')`
    }

    $navbar.onmouseleave = () => {
        $logo.style.backgroundImage = ''
    }

    /** 搜索框 */
    const $searchInput = $navbar.querySelector('.search input')
    const $searchIcon = $navbar.querySelector('.search .icon')
    $searchIcon.onclick = () => {
        const searchVal = $searchInput.value.trim()
        if (!searchVal) { $searchInput.focus(); return }
        window.location.href = `./tag.html?search=${encodeURIComponent(searchVal)}`
    }
    $searchInput.onkeydown = (e) => {
       if (e.key === 'Enter' || e.keyCode === 13) $searchIcon.click()
    }
})

/** 数组洗牌 */
function derangedArray(arr) {
    const nArr = [].concat(arr) // 拷贝数组
    for (var j, x, i = nArr.length; i; j = parseInt(Math.random() * i), x = nArr[--i], nArr[i] = nArr[j], nArr[j] = x);
    return nArr
}

/** 数组截取 */
function rangeArray(arr, num) {
    const nArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i >= num) break
        nArr.push(arr[i])
    }

    return nArr
}

/** Query Param 获取 */
// @link https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQueryParam(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

