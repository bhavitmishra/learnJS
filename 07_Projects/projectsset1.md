# projects related to DOM

## project link
[Click here](https://stackblotz.com/edit/dom-project-chaiaurcode?file=index.html) 

# Solution code

## project 1

```javascript
console.log("Bhavit)

const butt = document.querySelectorAll('.button');
const body = document.querySelector('body');

butt.forEach(function (b) {
  console.log(b);
  b.addEventListener('click', function (e) {
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});

```

## project 2

``` javascript
const frm = document.querySelector('form');

frm.addEventListener('submit', function (e) {
  e.preventDefault();
  const ht = parseInt(document.querySelector('#height').value);
  const wt = parseInt(document.querySelector('#weight').value);
  const ans = ((wt)/(ht*ht/10000));
  const res = document.querySelector('#results')
  if(ht ==='' || ht <0 || isNaN(ht))
  {
    res.innerHTML = `enter valid ht`
  }
  else if(wt ==='' || wt <0 || isNaN(wt))
  {
    res.innerHTML = `enter valid wt`
  }
  else {if(ans < 18.6) res.innerHTML = `You are Under weight , BMI : ${ans}`
  if(ans >= 18.6 && ans < 25) res.innerHTML = `You are in normal range , BMI : ${ans}`
  if(ans >= 25) res.innerHTML = `You are over weight , BMI : ${ans}`}
});


```