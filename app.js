const $ = (selector) => document.querySelector(selector);

window.addEventListener("load", () => {
  $("#notification").addEventListener("click", (e) => {
    e.stopPropagation();
    if ($(".notification_wrapper").style.display === "none") {
      $(".mystore_wrapper").style.display = "none";
      $(".notification_wrapper").style.display = "flex";
    } else {
      $(".notification_wrapper").style.display = "none";
    }
  });
  $("#profile").addEventListener("click", (e) => {
    e.stopPropagation();
    if ($(".mystore_wrapper").style.display === "none") {
      $(".notification_wrapper").style.display = "none";
      $(".mystore_wrapper").style.display = "flex";
    } else {
      $(".mystore_wrapper").style.display = "none";
    }
  });
  $("body").addEventListener("click", () => {
    $(".notification_wrapper").style.display = "none";
    $(".mystore_wrapper").style.display = "none";
  });

  $("#accordion_btn").addEventListener("click", () => {
    if ($("#accordion_open").style.display !== "block") {
      $("#accordion_open").style.display = "block";
      $("#accordion_close").style.display = "none";
      $(".setup_guide-bottom").style.height = "350px";
    } else {
      $(".setup_guide-bottom").style.height = "0px";
      $("#accordion_close").style.display = "block";
      $("#accordion_open").style.display = "none";
    }
  });
  document.querySelectorAll(".setup_listitem").forEach((el) => {
    el.addEventListener("click", (e) => {
      $(".active").classList.remove("active");
      el.classList.add("active");
    });
  });

  let checkedStep = 0;

  const handleSetupProgress = (step) => {
    $(".progress").value = step;
  };
  // handle setup step checked
  document.querySelectorAll(".btn_check").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.children[3].style.display === "none") {
        el.children[0].style.display = "none";
        el.children[1].style.display = "none";
        el.children[2].style.display = "block";
        setTimeout(() => {
          el.children[2].style.display = "none";
          el.children[3].style.display = "block";
          checkedStep++;
          $("#progress").value = checkedStep;
          $("#progressLabel").textContent = `${checkedStep}` + "/5 completed";
        }, 400);
      }
    });
  });
});
