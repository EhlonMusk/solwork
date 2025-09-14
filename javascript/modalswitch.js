let rankingsModal = "off";
let claimModal = "off";
let sectionsCount = "on";

// Helper function to close all main sections
const closeMainSections = () => {
  const sectionOne = document.querySelector(".sectionOne");
  const sectionTwo = document.querySelector(".sectionTwo");
  const sectionThree = document.querySelector(".sectionThree");

  sectionOne.classList.add("closed");
  sectionTwo.classList.add("closed");
  sectionThree.classList.add("closed");

  sectionsCount = "off";
};

// Helper function to open all main sections
const openMainSections = () => {
  const sectionOne = document.querySelector(".sectionOne");
  const sectionTwo = document.querySelector(".sectionTwo");
  const sectionThree = document.querySelector(".sectionThree");

  sectionOne.classList.remove("closed");
  sectionTwo.classList.remove("closed");
  sectionThree.classList.remove("closed");

  sectionsCount = "on";
};

// Helper function to close rankings modal
const closeRankingsModal = () => {
  const sectionFour = document.querySelector(".sectionFour");
  sectionFour.classList.remove("open");
  rankingsModal = "off";
};

const closeClaimModal = () => {
  const sectionFive = document.querySelector(".sectionFive");
  sectionFive.classList.remove("open");
  claimModal = "off";
};

// Helper function to scroll to top
const scrollToTop = () => {
  const scrollContainer = document.querySelector(".scrollContainer");
  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // Fallback for window scroll
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

// Main function to handle rankings button click
const rankingsModalToggle = () => {
  // If rankings modal is already open, do nothing
  if (rankingsModal === "on") {
    return;
  }

  // Opening rankings modal
  closeMainSections();
  if (claimModal === "on") {
    closeClaimModal();
  }

  const sectionFour = document.querySelector(".sectionFour");
  sectionFour.classList.add("open");
  rankingsModal = "on";

  // Scroll to top after opening the modal
  setTimeout(() => {
    scrollToTop();
  }, 50); // Small delay to ensure the modal is visible before scrolling
};

const claimModalToggle = () => {
  // If claim modal is already open, do nothing
  if (claimModal === "on") {
    return;
  }

  // Opening claim modal
  closeMainSections();
  if (rankingsModal === "on") {
    closeRankingsModal();
  }

  const sectionFive = document.querySelector(".sectionFive");
  sectionFive.classList.add("open");
  claimModal = "on";

  // Scroll to top after opening the modal
  setTimeout(() => {
    scrollToTop();
  }, 50); // Small delay to ensure the modal is visible before scrolling
};

// Function to handle navigation to main sections
const navigateToMainSection = (targetSection) => {
  const wasModalOpen = rankingsModal === "on" || claimModal === "on";

  if (rankingsModal === "on") {
    closeRankingsModal();
  }
  if (claimModal === "on") {
    closeClaimModal();
  }
  if (sectionsCount === "off") {
    openMainSections();
  }

  // If a modal was open, scroll to the target section after a brief delay
  // to allow the sections to be restored first
  if (wasModalOpen && targetSection) {
    setTimeout(() => {
      const targetElement = document.querySelector(targetSection);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100); // Small delay to ensure sections are visible
  }
};

// Event listeners for modal buttons - handle all instances
document.querySelectorAll(".rankingsBtn").forEach((btn) => {
  btn.onclick = () => {
    rankingsModalToggle();
    console.log("Rankings:", rankingsModal, "Claim", claimModal);
  };
});

document.querySelectorAll(".claimBtn").forEach((btn) => {
  btn.onclick = () => {
    claimModalToggle();
    console.log("Rankings:", rankingsModal, "Claim:", claimModal);
  };
});

// Event listeners for main navigation buttons - handle all instances
document.querySelectorAll('a[href="#sectionOne"]').forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigateToMainSection("#sectionOne");
    console.log(
      "Navigating to Home - Rankings:",
      rankingsModal,
      "Claim:",
      claimModal
    );
  };
});

document.querySelectorAll('a[href="#sectionTwo"]').forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigateToMainSection("#sectionTwo");
    console.log(
      "Navigating to Join - Rankings:",
      rankingsModal,
      "Claim:",
      claimModal
    );
  };
});

document.querySelectorAll('a[href="#sectionThree"]').forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigateToMainSection("#sectionThree");
    console.log(
      "Navigating to About - Rankings:",
      rankingsModal,
      "Claim:",
      claimModal
    );
  };
});
