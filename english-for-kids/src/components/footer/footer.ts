const renderFooter = (): void => {
  const html = `
  <div class="wrapper-footer">
  <div class="rslogo">
    <a href="https://rs.school/">
      <img src="https://rollingscopes.com/images/logo_rs_text.svg" alt="rsschool" width="150px">
    </a>
  </div>
  <div class="footer-margin">2021</div>
  <div class="github">
    <a href="https://github.com/testoner"><img
        src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github" width="100px"></a>
  </div>
  </div>`;
  const root = document.createElement('footer');
  root.setAttribute('class', 'footer');
  root.innerHTML = html;
  document.body.appendChild(root);
};
export default renderFooter;
