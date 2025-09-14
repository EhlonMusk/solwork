document.querySelectorAll(".leaderboardBox").forEach((box) => {
  box.addEventListener("click", function (e) {
    // Create a ripple effect on click
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.left = e.clientX - box.offsetLeft - 25 + "px";
    ripple.style.top = e.clientY - box.offsetTop - 25 + "px";
    ripple.style.width = "50px";
    ripple.style.height = "50px";

    box.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation keyframes
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Simulate live updates every 30 seconds
setInterval(() => {
  const shillCounts = document.querySelectorAll(".shillCount");
  shillCounts.forEach((count) => {
    const currentValue = parseInt(count.textContent);
    if (Math.random() > 0.7) {
      // 30% chance to update each count
      count.textContent = currentValue + Math.floor(Math.random() * 3) + 1;
      count.style.animation = "pulse 0.5s ease";
      setTimeout(() => {
        count.style.animation = "";
      }, 500);
    }
  });
}, 30000);

// Add pulse animation
const pulseStyle = document.createElement("style");
pulseStyle.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
document.head.appendChild(pulseStyle);
