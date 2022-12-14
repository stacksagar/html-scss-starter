// Header
const profileOptionsToggler = document.getElementById(
  "profile-options-toggler"
);
if (profileOptionsToggler) {
  let show = false;
  function toggle() {
    if (show) {
      document.querySelector(".profile-options").classList.remove("show");
    } else {
      document.querySelector(".profile-options").classList.add("show");
    }

    show = !show;
  }
  profileOptionsToggler.addEventListener("click", toggle);
  profileOptionsToggler.addEventListener("blur", () => {
    setTimeout(() => {
      toggle();
    }, 300);
  });
}

// Sidebar Nav Toggler
const sidebar_nav_toggler = document.getElementById("sidebar_nav_toggler");
const sidebar_nav_overlay = document.querySelector(".sidebar_nav_overlay");
const sidebar_nav = document.querySelector(".sidebar_nav");
const content = document.querySelector(".content");
if (sidebar_nav) {
  let is_sidebar_fit_content = false;
  function toggle_sidebar_nav() {
    is_sidebar_fit_content = !is_sidebar_fit_content;
    if (is_sidebar_fit_content) {
      sidebar_nav_overlay.style.display = "block";
      sidebar_nav.classList.add("toggle_sidebar_nav");
      content.classList.add("full");
    } else {
      sidebar_nav_overlay.style.display = "none";
      sidebar_nav.classList.remove("toggle_sidebar_nav");
      content.classList.remove("full");
    }
  }
  sidebar_nav_toggler.addEventListener("click", toggle_sidebar_nav);
  sidebar_nav_overlay.addEventListener("click", toggle_sidebar_nav);
}

// Copy Refarrel Link Text
const copy_btn = document.getElementById("copy_btn");
if (copy_btn) {
  copy_btn.addEventListener("click", function () {
    var copyText = document.getElementById("copy_refarrel_input");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    this.innerHTML = "Copied";
    setTimeout(() => {
      this.innerHTML = `<i class="fa-solid fa-copy"></i>`;
    }, 1000);
  });
}
const all_dropdown = document.querySelectorAll(".dropdown");

all_dropdown.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", function () {
    sidebar_nav.style.paddingRight = "200px";
  });
  dropdown.addEventListener("mouseleave", function () {
    sidebar_nav.style.paddingRight = "10px";
  });
});

// Deposit
const copy_wallet_btn = document.getElementById("copy_wallet");
const wallet_value = document.getElementById("wallet_value");
const select_payment_method = document.getElementById("select_payment_method");
const wallet_details = document.getElementById("wallet_details");
const wallet_details_text = document.getElementById("wallet_details_text");
const deposit_wallet_label = document.getElementById("deposit_wallet_label");
const deposit_wallet_input = document.getElementById("deposit_wallet_input");

if (select_payment_method && wallet_details) {
  select_payment_method.addEventListener("change", function (e) {
    const value = e.target.value;
    const selected_option = select_payment_method.selectedOptions[0];
    wallet_details.style.display = "block";
    wallet_value.value = value;
    wallet_details_text.innerHTML = selected_option?.dataset?.text;
    deposit_wallet_label.innerHTML = selected_option?.dataset?.text;
    deposit_wallet_input.setAttribute(
      "placeholder",
      selected_option?.innerText.trim()
    );
  });

  if (copy_wallet_btn) {
    copy_wallet_btn.addEventListener("click", function () {
      this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
  </svg>`;

      navigator.clipboard.writeText(wallet_value.value);
      setTimeout(() => {
        copy_wallet_btn.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
      />
      <path
        d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
      />
    </svg>`;
      }, 1000);
    });
  }
}

// Add Youtube Channel
const daily_visit_limit = document.getElementById("daily_visit_limit");
const daily_visit_limit_select = document.getElementById(
  "daily_visit_limit_select"
);

if (daily_visit_limit_select) {
  daily_visit_limit_select.addEventListener("change", function () {
    const value = this.value.toLowerCase();

    if (value === "enabled") {
      daily_visit_limit.disabled = false;
    } else {
      daily_visit_limit.disabled = true;
    }
  });
}

const all_countries_select = document.getElementById("all_countries_select");
const specific_countries_select = document.getElementById(
  "specific_countries_select"
);

if (all_countries_select) {
  all_countries_select.addEventListener("change", function () {
    const value = this.value.toLowerCase();
    if (value === "specific") {
      specific_countries_select.style.display = "block";
    } else {
      specific_countries_select.style.display = "none";
    }
  });
}

// Screen Popup Handlers
const all_full_screen_popup = document.querySelectorAll(".full_screen_popup");
const all_fsp_overlay = document.querySelectorAll(".fsp_overlay");
const all_fsp_content = document.querySelectorAll(".fsp_content");
const all_show_fsp = document.querySelectorAll(".show_fsp");
const all_end_popup = document.querySelectorAll(".end_popup");

if (all_full_screen_popup) {
  all_fsp_overlay.forEach((overlay) => {
    overlay.addEventListener("click", function () {
      all_full_screen_popup.forEach((p) => (p.style.display = "none"));
    });
  });
}

if (all_show_fsp) {
  all_show_fsp.forEach((btn) => {
    btn.addEventListener("click", function () {
      all_full_screen_popup.forEach((p) => {
        if (this.dataset.ref === p.dataset.ref) {
          p.style.display = "flex";
        }
      });
    });
  });
}

if (all_end_popup) {
  all_end_popup.forEach((ep) => {
    ep.addEventListener("click", function () {
      setTimeout(() => {
        this.parentElement.parentElement.style.display = "none";
      }, 100);
    });
  });
}
function end_popup() {
  if (all_full_screen_popup) {
    all_full_screen_popup.forEach((p) => {
      p.style.display = "none";
    });
  }
}

// Popup message
function fail_message(message) {
  const header = document.querySelector(".header");
  if (header) {
    header.innerHTML += `
      <div class="popup_message fail">
        <div class="popup_message_icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
        <div class="popup_message_text">${message}</div>
      </div>
`;
  }
}

function success_message(message) {
  const header = document.querySelector(".header");
  if (header) {
    header.innerHTML += `
      <div class="popup_message success">
        <div class="popup_message_icon"><i class="fa-solid fa-check-circle"></i></div>
        <div class="popup_message_text">${message}</div>
      </div>
`;
  }
}

// Withdraw
const withdraw_payment_method = document.getElementById(
  "withdraw_payment_method"
);
const withdraw_wallet = document.getElementById("withdraw_wallet");
const withdraw_wallet_label = document.getElementById("withdraw_wallet_label");

if (withdraw_payment_method) {
  withdraw_payment_method.addEventListener("click", function () {
    const selected_option = withdraw_payment_method.selectedOptions[0];

    const text = selected_option.dataset.text;
    if (text) {
      withdraw_wallet_label.innerHTML = text;
      withdraw_wallet.setAttribute("placeholder", text);
    }
  });
}

// Dashboard Sidebar
const all_ds_title = document.querySelectorAll(".ds_title");
const all_ds_ul = document.querySelectorAll(".ds_ul");

if (all_ds_title && all_ds_ul) {
  const heights = [];
  for (let i = 0; i < all_ds_ul.length; i++) {
    const ele = all_ds_ul[i];
    heights.push(ele.clientHeight);
    ele.style.height = ele.clientHeight + "px";
  }

  all_ds_title.forEach((title) => {
    let open = true;
    title.addEventListener("click", function () {
      const title_ref = this.dataset?.ref;

      const icon = this.children[1];
      if (open) {
        icon.style.transform = "rotate(-90deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }

      all_ds_ul.forEach((item, i) => {
        const item_ref = item.dataset?.ref;
        if (title_ref === item_ref) {
          if (open) {
            item.style.height = "0px";
          } else {
            item.style.height = heights[i] + "px";
          }
          open = !open;
        }
      });
    });
  });
}

// Lottery Timer
(function () {
  const lottery_timer = document.querySelector(".lottery_timer");
  if (lottery_timer) {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      dayMonth = "09/25/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, 0);
  }
})();
