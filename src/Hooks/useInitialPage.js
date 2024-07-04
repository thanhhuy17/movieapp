  // Hàm trở về đầu trang
  const wayBackInitial = () => {
    window.addEventListener("scroll", function () {});
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  export default wayBackInitial