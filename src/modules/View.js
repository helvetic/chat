export default {
  render(templateName, model){
    templateName = templateName + 'Tmpl';

    let templateEl = document.getElementById(templateName);
    let templateSrc = templateEl.innerHTML;
    let renderFn = Handlebars.compile(templateSrc);

    return renderFn(model);
  }
};
