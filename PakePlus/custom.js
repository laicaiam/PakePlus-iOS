window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}
// 拦截唤起微信小程序、weixin协议
document.addEventListener('click',function(e){
    let target = e.target.closest('a');
    if(target && target.href){
        let href = target.href;
        if(href.indexOf('weixin://')!==-1 || href.indexOf('wxapp://')!==-1 || href.indexOf('miniProgram')!==-1){
            e.preventDefault();
            return false;
        }
    }
})
// 拦截页面js触发的小程序跳转
window.navigateToMiniProgram = function(){return false;}
window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
if(href.indexOf('kdocs.cn')>-1 && href.indexOf('wx')!==-1){e.preventDefault();}