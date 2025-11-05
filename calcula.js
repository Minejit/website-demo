const gift = document.querySelector("#table");

gift.addEventListener('click', () => {
  setTimeout(() => {
    const msg = document.createElement('div');
    msg.id = 'gift';
        msg.innerHTML = `
      <h2>🎉 Happy Birthday Mom! 💖</h2>
      <p>Thank you for always being there for me.</p>
      <p>You make every day brighter with your love and care.</p>
      <p>Enjoy your special day! 💐</p>
    `;;
    const git = document.getElementsByClassName('content-1');
    if (git.length > 0) {
      git[0].style.transition = 'opacity 1s ease';
      git[0].style.opacity = '0';
    }
    msg.style.position = 'fixed';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.background = 'white';
    msg.style.color = '#ff4081';
    msg.style.padding = '20px 40px';
    msg.style.borderRadius = '20px';
    msg.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
    msg.style.fontSize = '1.5rem';
    msg.style.textAlign = 'center';
    msg.style.zIndex = '1000';
    msg.style.opacity = '0';
    msg.style.transition = 'opacity 1s ease';

    document.body.appendChild(msg);


    setTimeout(() => {
      msg.style.opacity = '1';
    }, 100);

  }, 200);
});
