(function(){
  //  selectors
  const border = document.querySelector('.border');
  const ball = document.querySelector('.ball');
  const button = document.querySelectorAll('.btn');
  const reset = document.querySelector('.reset');

  let left = 50,
    top = 50,
    steps = 20,
    pos = null;

  //  events
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
      pos = e.currentTarget.value;
      setBallPosition(pos);
      moveBall();
    });
  }

  document.addEventListener('keydown', function (e) {
    setBallPosition(e.keyCode);
    moveBall();
  });

  reset.addEventListener('click', function (e) {
    resetBall();
  });

  // function
  const addBorderShake = () => border.classList.add('shake');
  const removeBorderShake = () => border.classList.remove('shake');
  const defaultBorderColor = () => (border.style.borderColor = '#7d7db1');

  function setBallPosition(direction) {
    let leftPos = () => (left -= steps);
    let rightPos = () => (left += steps);
    let upPos = () => (top -= steps);
    let downPos = () => (top += steps);

    let setPos = {
      37: leftPos,
      left: leftPos,

      39: rightPos,
      right: rightPos,

      38: upPos,
      up: upPos,

      40: downPos,
      down: downPos,
    };

    setPos[direction]();
  }

  function moveBall() {
    if (top < 15) {
      top = 15;
      setTimeout(() => {
        addBorderShake();
        border.style.borderTopColor = 'red';
      }, 200);
    } else if (top > 85) {
      top = 85;
      setTimeout(() => {
        addBorderShake();
        border.style.borderBottomColor = 'red';
      }, 200);
    } else if (left < 15) {
      left = 15;
      setTimeout(() => {
        addBorderShake();
        border.style.borderLeftColor = 'red';
      }, 200);
    } else if (left > 85) {
      left = 85;
      setTimeout(() => {
        addBorderShake();
        border.style.borderRightColor = 'red';
      }, 200);
    } else {
      defaultBorderColor();
      removeBorderShake();
    }

    ball.style.top = top + '%';
    ball.style.left = left + '%';
  }

  function resetBall() {
    defaultBorderColor();
    removeBorderShake();

    left = 50;
    top = 50;
    pos = null;

    ball.style.top = top + '%';
    ball.style.left = left + '%';
  }
})()