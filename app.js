const $ = (selector) => document.querySelector(selector);

window.addEventListener("load", () => {
  function handleNotificationMenu() {
    if ($(".notification_wrapper").style.display === "none") {
      $(".mystore_wrapper").style.display = "none";
      $(".notification_wrapper").style.display = "flex";
      $("#notification_btn").ariaExpanded = "true";
    } else {
      $(".notification_wrapper").style.display = "none";
      $("#notification_btn").ariaExpanded = "false";
    }
  }

  function handleProfileMenu() {
    if ($(".mystore_wrapper").style.display === "none") {
      $(".notification_wrapper").style.display = "none";
      $(".mystore_wrapper").style.display = "flex";
      document
        .querySelectorAll('.mystore_wrapper [role="menuitem"]')
        .item(0)
        .focus();
      $("#profile").ariaExpanded = "true";
    } else {
      $(".mystore_wrapper").style.display = "none";
      $("#profile").ariaExpanded = "false";
    }
  }

  $("#notification_btn").addEventListener("click", (e) => {
    e.stopPropagation();
    handleNotificationMenu();
  });
  $("#profile").addEventListener("click", (e) => {
    e.stopPropagation();
    handleProfileMenu();
  });
  $("#profile").addEventListener("keyup",(e)=>{
    if(e.key === "Escape"){
        handleProfileMenu()
    }
  })
  $("body").addEventListener("click", () => {
    $(".notification_wrapper").style.display = "none";
    $(".mystore_wrapper").style.display = "none";
  });


  $("#close_callout").addEventListener("click", () => {
    $(".setup_header").style.display = "none";
  });
  $("#accordion_btn").addEventListener("click", () => {
    if ($("#accordion_open").style.display !== "block") {
      $("#accordion_open").style.display = "block";
      $("#accordion_close").style.display = "none";
      $(".setup_guide-bottom").style.height = "400px";
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
      } else {
        el.children[0].style.display = "";
        el.children[1].style.display = "";
        el.children[2].style.display = "none";
        el.children[3].style.display = "none";
        checkedStep--;
        $("#progress").value = checkedStep;
        $("#progressLabel").textContent = `${checkedStep}` + "/5 completed";
      }
    });
  });
});
