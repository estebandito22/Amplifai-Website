.md-form {
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem; }
  .md-form input:not([type]),
  .md-form input[type=text]:not(.browser-default),
  .md-form input[type=password]:not(.browser-default),
  .md-form input[type=email]:not(.browser-default),
  .md-form input[type=url]:not(.browser-default),
  .md-form input[type=time]:not(.browser-default),
  .md-form input[type=date]:not(.browser-default),
  .md-form input[type=datetime]:not(.browser-default),
  .md-form input[type=datetime-local]:not(.browser-default),
  .md-form input[type=tel]:not(.browser-default),
  .md-form input[type=number]:not(.browser-default),
  .md-form input[type=search]:not(.browser-default),
  .md-form input[type=search-md],
  .md-form textarea.md-textarea {
    box-sizing: content-box;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
    .md-form input:not([type]):focus:not([readonly]),
    .md-form input[type=text]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=password]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=email]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=url]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=time]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=date]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=datetime]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=datetime-local]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=tel]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=number]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=search]:not(.browser-default):focus:not([readonly]),
    .md-form input[type=search-md]:focus:not([readonly]),
    .md-form textarea.md-textarea:focus:not([readonly]) {
      border-bottom: 1px solid #4285f4;
      box-shadow: 0 1px 0 0 #4285f4; }
      .md-form input:not([type]):focus:not([readonly]) + label,
      .md-form input[type=text]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=password]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=email]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=url]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=time]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=date]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=datetime]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=tel]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=number]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=search]:not(.browser-default):focus:not([readonly]) + label,
      .md-form input[type=search-md]:focus:not([readonly]) + label,
      .md-form textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4; }
    .md-form input:not([type]) + label:after,
    .md-form input[type=text]:not(.browser-default) + label:after,
    .md-form input[type=password]:not(.browser-default) + label:after,
    .md-form input[type=email]:not(.browser-default) + label:after,
    .md-form input[type=url]:not(.browser-default) + label:after,
    .md-form input[type=time]:not(.browser-default) + label:after,
    .md-form input[type=date]:not(.browser-default) + label:after,
    .md-form input[type=datetime]:not(.browser-default) + label:after,
    .md-form input[type=datetime-local]:not(.browser-default) + label:after,
    .md-form input[type=tel]:not(.browser-default) + label:after,
    .md-form input[type=number]:not(.browser-default) + label:after,
    .md-form input[type=search]:not(.browser-default) + label:after,
    .md-form input[type=search-md] + label:after,
    .md-form textarea.md-textarea + label:after {
      content: "";
      position: absolute;
      top: 65px;
      display: block;
      opacity: 0;
      transition: 0.2s opacity ease-out, 0.2s color ease-out; }
    .md-form input:not([type]).valid, .md-form input:not([type]):focus.valid,
    .md-form input[type=text]:not(.browser-default).valid,
    .md-form input[type=text]:not(.browser-default):focus.valid,
    .md-form input[type=password]:not(.browser-default).valid,
    .md-form input[type=password]:not(.browser-default):focus.valid,
    .md-form input[type=email]:not(.browser-default).valid,
    .md-form input[type=email]:not(.browser-default):focus.valid,
    .md-form input[type=url]:not(.browser-default).valid,
    .md-form input[type=url]:not(.browser-default):focus.valid,
    .md-form input[type=time]:not(.browser-default).valid,
    .md-form input[type=time]:not(.browser-default):focus.valid,
    .md-form input[type=date]:not(.browser-default).valid,
    .md-form input[type=date]:not(.browser-default):focus.valid,
    .md-form input[type=datetime]:not(.browser-default).valid,
    .md-form input[type=datetime]:not(.browser-default):focus.valid,
    .md-form input[type=datetime-local]:not(.browser-default).valid,
    .md-form input[type=datetime-local]:not(.browser-default):focus.valid,
    .md-form input[type=tel]:not(.browser-default).valid,
    .md-form input[type=tel]:not(.browser-default):focus.valid,
    .md-form input[type=number]:not(.browser-default).valid,
    .md-form input[type=number]:not(.browser-default):focus.valid,
    .md-form input[type=search]:not(.browser-default).valid,
    .md-form input[type=search]:not(.browser-default):focus.valid,
    .md-form input[type=search-md].valid,
    .md-form input[type=search-md]:focus.valid,
    .md-form textarea.md-textarea.valid,
    .md-form textarea.md-textarea:focus.valid {
      border-bottom: 1px solid #00c851;
      box-shadow: 0 1px 0 0 #00c851; }
    .md-form input:not([type]).valid + label:after,
    .md-form input:not([type]):focus.valid + label:after,
    .md-form input[type=text]:not(.browser-default).valid + label:after,
    .md-form input[type=text]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=password]:not(.browser-default).valid + label:after,
    .md-form input[type=password]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=email]:not(.browser-default).valid + label:after,
    .md-form input[type=email]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=url]:not(.browser-default).valid + label:after,
    .md-form input[type=url]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=time]:not(.browser-default).valid + label:after,
    .md-form input[type=time]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=date]:not(.browser-default).valid + label:after,
    .md-form input[type=date]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).valid + label:after,
    .md-form input[type=datetime]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).valid + label:after,
    .md-form input[type=tel]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=number]:not(.browser-default).valid + label:after,
    .md-form input[type=number]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=search]:not(.browser-default).valid + label:after,
    .md-form input[type=search]:not(.browser-default):focus.valid + label:after,
    .md-form input[type=search-md].valid + label:after,
    .md-form input[type=search-md]:focus.valid + label:after,
    .md-form textarea.md-textarea.valid + label:after,
    .md-form textarea.md-textarea:focus.valid + label:after {
      content: attr(data-success);
      color: #00c851;
      opacity: 1; }
    .md-form input:not([type]).invalid, .md-form input:not([type]):focus.invalid,
    .md-form input[type=text]:not(.browser-default).invalid,
    .md-form input[type=text]:not(.browser-default):focus.invalid,
    .md-form input[type=password]:not(.browser-default).invalid,
    .md-form input[type=password]:not(.browser-default):focus.invalid,
    .md-form input[type=email]:not(.browser-default).invalid,
    .md-form input[type=email]:not(.browser-default):focus.invalid,
    .md-form input[type=url]:not(.browser-default).invalid,
    .md-form input[type=url]:not(.browser-default):focus.invalid,
    .md-form input[type=time]:not(.browser-default).invalid,
    .md-form input[type=time]:not(.browser-default):focus.invalid,
    .md-form input[type=date]:not(.browser-default).invalid,
    .md-form input[type=date]:not(.browser-default):focus.invalid,
    .md-form input[type=datetime]:not(.browser-default).invalid,
    .md-form input[type=datetime]:not(.browser-default):focus.invalid,
    .md-form input[type=datetime-local]:not(.browser-default).invalid,
    .md-form input[type=datetime-local]:not(.browser-default):focus.invalid,
    .md-form input[type=tel]:not(.browser-default).invalid,
    .md-form input[type=tel]:not(.browser-default):focus.invalid,
    .md-form input[type=number]:not(.browser-default).invalid,
    .md-form input[type=number]:not(.browser-default):focus.invalid,
    .md-form input[type=search]:not(.browser-default).invalid,
    .md-form input[type=search]:not(.browser-default):focus.invalid,
    .md-form input[type=search-md].invalid,
    .md-form input[type=search-md]:focus.invalid,
    .md-form textarea.md-textarea.invalid,
    .md-form textarea.md-textarea:focus.invalid {
      border-bottom: 1px solid #f44336;
      box-shadow: 0 1px 0 0 #f44336; }
    .md-form input:not([type]).invalid + label:after,
    .md-form input:not([type]):focus.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).invalid + label:after,
    .md-form input[type=text]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).invalid + label:after,
    .md-form input[type=password]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).invalid + label:after,
    .md-form input[type=email]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).invalid + label:after,
    .md-form input[type=url]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).invalid + label:after,
    .md-form input[type=time]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).invalid + label:after,
    .md-form input[type=date]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).invalid + label:after,
    .md-form input[type=tel]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).invalid + label:after,
    .md-form input[type=number]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).invalid + label:after,
    .md-form input[type=search]:not(.browser-default):focus.invalid + label:after,
    .md-form input[type=search-md].invalid + label:after,
    .md-form input[type=search-md]:focus.invalid + label:after,
    .md-form textarea.md-textarea.invalid + label:after,
    .md-form textarea.md-textarea:focus.invalid + label:after {
      content: attr(data-error);
      color: #f44336;
      opacity: 1; }
    .md-form input:not([type]).form-control.valid + label:after,
    .md-form input:not([type]).form-control:focus.valid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control.valid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control:focus.valid + label:after,
    .md-form input[type=search-md].form-control.valid + label:after,
    .md-form input[type=search-md].form-control:focus.valid + label:after,
    .md-form textarea.md-textarea.form-control.valid + label:after,
    .md-form textarea.md-textarea.form-control:focus.valid + label:after {
      top: 4.1rem; }
    .md-form input:not([type]).form-control.invalid + label:after,
    .md-form input:not([type]).form-control:focus.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control:focus.invalid + label:after,
    .md-form input[type=search-md].form-control.invalid + label:after,
    .md-form input[type=search-md].form-control:focus.invalid + label:after,
    .md-form textarea.md-textarea.form-control.invalid + label:after,
    .md-form textarea.md-textarea.form-control:focus.invalid + label:after {
      top: 4rem; }
    .md-form input:not([type]).form-control-lg.valid + label:after,
    .md-form input:not([type]).form-control-lg:focus.valid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-lg.valid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-lg:focus.valid + label:after,
    .md-form input[type=search-md].form-control-lg.valid + label:after,
    .md-form input[type=search-md].form-control-lg:focus.valid + label:after,
    .md-form textarea.md-textarea.form-control-lg.valid + label:after,
    .md-form textarea.md-textarea.form-control-lg:focus.valid + label:after {
      top: 4.6rem; }
    .md-form input:not([type]).form-control-lg.invalid + label:after,
    .md-form input:not([type]).form-control-lg:focus.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-lg.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-lg:focus.invalid + label:after,
    .md-form input[type=search-md].form-control-lg.invalid + label:after,
    .md-form input[type=search-md].form-control-lg:focus.invalid + label:after,
    .md-form textarea.md-textarea.form-control-lg.invalid + label:after,
    .md-form textarea.md-textarea.form-control-lg:focus.invalid + label:after {
      top: 4.6rem; }
    .md-form input:not([type]).form-control-sm.valid + label:after,
    .md-form input:not([type]).form-control-sm:focus.valid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-sm.valid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-sm:focus.valid + label:after,
    .md-form input[type=search-md].form-control-sm.valid + label:after,
    .md-form input[type=search-md].form-control-sm:focus.valid + label:after,
    .md-form textarea.md-textarea.form-control-sm.valid + label:after,
    .md-form textarea.md-textarea.form-control-sm:focus.valid + label:after {
      top: 3.7rem; }
    .md-form input:not([type]).form-control-sm.invalid + label:after,
    .md-form input:not([type]).form-control-sm:focus.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=text]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=password]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=email]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=url]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=time]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=date]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=datetime]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=datetime-local]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=tel]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=number]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-sm.invalid + label:after,
    .md-form input[type=search]:not(.browser-default).form-control-sm:focus.invalid + label:after,
    .md-form input[type=search-md].form-control-sm.invalid + label:after,
    .md-form input[type=search-md].form-control-sm:focus.invalid + label:after,
    .md-form textarea.md-textarea.form-control-sm.invalid + label:after,
    .md-form textarea.md-textarea.form-control-sm:focus.invalid + label:after {
      top: 3.6rem; }
  .md-form > input[type=date]:not(.browser-default) + label {
    transform: translateY(-27px) scale(0.8);
    transform-origin: 0 0; }
  .md-form > input[type]:-webkit-autofill:not(.browser-default):not([type="search"]) + label,
  .md-form > input[type=time]:not(.browser-default) + label {
    font-size: .8rem;
    transform: translateY(-25px);
    transform-origin: 0 0; }
  .md-form .was-validated input[type=text]:valid + label {
    color: #00c851 !important; }
  .md-form .was-validated input[type=text]:invalid + label {
    color: #f44336 !important; }
  .md-form .was-validated .form-control:valid:focus {
    box-shadow: 0 1px 0 0 #00c851 !important; }
  .md-form .was-validated .form-control:valid {
    border-color: #00c851 !important; }
  .md-form .was-validated .form-control:invalid:focus {
    box-shadow: 0 1px 0 0 #f44336 !important; }
  .md-form .was-validated .form-control:invalid {
    border-color: #f44336 !important; }
  .md-form .form-control {
    margin: 0 0 0.5rem 0;
    border-radius: 0;
    padding: 0.6rem 0 0.4rem 0;
    background-color: transparent;
    height: auto; }
    .md-form .form-control:focus {
      box-shadow: none; }
    .md-form .form-control:disabled, .md-form .form-control[readonly] {
      border-bottom: 1px solid #bdbdbd;
      background-color: transparent; }
    .md-form .form-control.is-valid {
      border-color: #00c851; }
      .md-form .form-control.is-valid:focus {
        border-color: #00c851 !important;
        box-shadow: 0 1px 0 0 #00c851 !important; }
    .md-form .form-control.is-invalid {
      border-color: #f44336; }
      .md-form .form-control.is-invalid:focus {
        box-shadow: 0 1px 0 0 #f44336 !important;
        border-color: #f44336 !important; }
    .md-form .form-control.is-valid, .md-form .form-control.is-invalid {
      background-position: center right !important; }
  .md-form .validate {
    margin-bottom: 2.5rem; }
  .md-form label {
    font-size: 1rem; }
    .md-form label.active {
      font-size: 1rem; }
  .md-form .prefix {
    top: 0.25rem;
    font-size: 1.75rem; }
    .md-form .prefix ~ input,
    .md-form .prefix ~ textarea {
      margin-left: 2.5rem;
      width: calc(100% - 2.5rem); }
    .md-form .prefix ~ label {
      margin-left: 2.5rem; }
    .md-form .prefix ~ .form-text {
      margin-left: 2.6rem; }
  .md-form label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    transition: transform .2s ease-out, color .2s ease-out;
    transform-origin: 0% 100%;
    transform: translateY(12px);
    cursor: text;
    color: #757575; }
    .md-form label.active {
      transform: translateY(-14px) scale(0.8); }
  .md-form .prefix {
    position: absolute;
    transition: color 0.2s; }
    .md-form .prefix.active {
      color: #4285f4; }
  .md-form.form-lg .validate {
    margin-bottom: 2.8rem; }
  .md-form.form-lg label {
    font-size: 1.25rem; }
    .md-form.form-lg label.active {
      font-size: 1.15rem; }
  .md-form.form-lg .prefix {
    top: 0.4rem;
    font-size: 2rem; }
    .md-form.form-lg .prefix ~ input,
    .md-form.form-lg .prefix ~ textarea {
      margin-left: 3rem;
      width: calc(100% - 3rem); }
    .md-form.form-lg .prefix ~ label {
      margin-left: 3rem; }
    .md-form.form-lg .prefix ~ .form-text {
      margin-left: 3.1rem; }
  .md-form.form-sm .validate {
    margin-bottom: 2.3rem; }
  .md-form.form-sm label {
    font-size: 0.875rem; }
    .md-form.form-sm label.active {
      font-size: 0.95rem; }
  .md-form.form-sm .prefix {
    top: 0.35rem;
    font-size: 1.5rem; }
    .md-form.form-sm .prefix ~ input,
    .md-form.form-sm .prefix ~ textarea {
      margin-left: 2rem;
      width: calc(100% - 2rem); }
    .md-form.form-sm .prefix ~ label {
      margin-left: 2rem; }
    .md-form.form-sm .prefix ~ .form-text {
      margin-left: 2rem; }
  .md-form textarea.md-textarea {
    overflow-y: hidden;
    padding: 1.5rem 0; }
  .md-form textarea.md-textarea-auto {
    padding: 0;
    padding-top: 1.5rem; }
  .md-form.md-outline {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem; }
    .md-form.md-outline input[type=text],
    .md-form.md-outline input[type=password],
    .md-form.md-outline input[type=email],
    .md-form.md-outline input[type=url],
    .md-form.md-outline input[type=time],
    .md-form.md-outline input[type=date],
    .md-form.md-outline input[type=datetime-local],
    .md-form.md-outline input[type=tel],
    .md-form.md-outline input[type=number],
    .md-form.md-outline input[type=search-md],
    .md-form.md-outline input[type=search],
    .md-form.md-outline textarea.md-textarea {
      transition: all .3s;
      outline: none;
      box-shadow: none;
      border: 1px solid #dadce0;
      border-radius: 4px;
      background-color: transparent;
      box-sizing: border-box; }
      .md-form.md-outline input[type=text]:focus:not([readonly]),
      .md-form.md-outline input[type=password]:focus:not([readonly]),
      .md-form.md-outline input[type=email]:focus:not([readonly]),
      .md-form.md-outline input[type=url]:focus:not([readonly]),
      .md-form.md-outline input[type=time]:focus:not([readonly]),
      .md-form.md-outline input[type=date]:focus:not([readonly]),
      .md-form.md-outline input[type=datetime-local]:focus:not([readonly]),
      .md-form.md-outline input[type=tel]:focus:not([readonly]),
      .md-form.md-outline input[type=number]:focus:not([readonly]),
      .md-form.md-outline input[type=search-md]:focus:not([readonly]),
      .md-form.md-outline input[type=search]:focus:not([readonly]),
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
        border-color: #4285f4;
        box-shadow: inset 0px 0px 0px 1px #4285f4; }
        .md-form.md-outline input[type=text]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=password]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=email]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=url]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=time]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=date]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=datetime-local]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=tel]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=number]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=search-md]:focus:not([readonly]) + label,
        .md-form.md-outline input[type=search]:focus:not([readonly]) + label,
        .md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
          color: #4285f4; }
      .md-form.md-outline input[type=text].valid, .md-form.md-outline input[type=text]:focus.valid,
      .md-form.md-outline input[type=password].valid,
      .md-form.md-outline input[type=password]:focus.valid,
      .md-form.md-outline input[type=email].valid,
      .md-form.md-outline input[type=email]:focus.valid,
      .md-form.md-outline input[type=url].valid,
      .md-form.md-outline input[type=url]:focus.valid,
      .md-form.md-outline input[type=time].valid,
      .md-form.md-outline input[type=time]:focus.valid,
      .md-form.md-outline input[type=date].valid,
      .md-form.md-outline input[type=date]:focus.valid,
      .md-form.md-outline input[type=datetime-local].valid,
      .md-form.md-outline input[type=datetime-local]:focus.valid,
      .md-form.md-outline input[type=tel].valid,
      .md-form.md-outline input[type=tel]:focus.valid,
      .md-form.md-outline input[type=number].valid,
      .md-form.md-outline input[type=number]:focus.valid,
      .md-form.md-outline input[type=search-md].valid,
      .md-form.md-outline input[type=search-md]:focus.valid,
      .md-form.md-outline input[type=search].valid,
      .md-form.md-outline input[type=search]:focus.valid,
      .md-form.md-outline textarea.md-textarea.valid,
      .md-form.md-outline textarea.md-textarea:focus.valid {
        border-color: #00c851;
        box-shadow: inset 0px 0px 0px 1px #00c851; }
      .md-form.md-outline input[type=text]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=text].valid + label:after,
      .md-form.md-outline input[type=text]:focus.valid + label:after,
      .md-form.md-outline input[type=password]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=password].valid + label:after,
      .md-form.md-outline input[type=password]:focus.valid + label:after,
      .md-form.md-outline input[type=email]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=email].valid + label:after,
      .md-form.md-outline input[type=email]:focus.valid + label:after,
      .md-form.md-outline input[type=url]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=url].valid + label:after,
      .md-form.md-outline input[type=url]:focus.valid + label:after,
      .md-form.md-outline input[type=time]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=time].valid + label:after,
      .md-form.md-outline input[type=time]:focus.valid + label:after,
      .md-form.md-outline input[type=date]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=date].valid + label:after,
      .md-form.md-outline input[type=date]:focus.valid + label:after,
      .md-form.md-outline input[type=datetime-local]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=datetime-local].valid + label:after,
      .md-form.md-outline input[type=datetime-local]:focus.valid + label:after,
      .md-form.md-outline input[type=tel]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=tel].valid + label:after,
      .md-form.md-outline input[type=tel]:focus.valid + label:after,
      .md-form.md-outline input[type=number]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=number].valid + label:after,
      .md-form.md-outline input[type=number]:focus.valid + label:after,
      .md-form.md-outline input[type=search-md]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=search-md].valid + label:after,
      .md-form.md-outline input[type=search-md]:focus.valid + label:after,
      .md-form.md-outline input[type=search]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type=search].valid + label:after,
      .md-form.md-outline input[type=search]:focus.valid + label:after,
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]).valid + label,
      .md-form.md-outline textarea.md-textarea.valid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.valid + label:after {
        content: attr(data-success);
        color: #00c851;
        opacity: 1; }
      .md-form.md-outline input[type=text].invalid, .md-form.md-outline input[type=text]:focus.invalid,
      .md-form.md-outline input[type=password].invalid,
      .md-form.md-outline input[type=password]:focus.invalid,
      .md-form.md-outline input[type=email].invalid,
      .md-form.md-outline input[type=email]:focus.invalid,
      .md-form.md-outline input[type=url].invalid,
      .md-form.md-outline input[type=url]:focus.invalid,
      .md-form.md-outline input[type=time].invalid,
      .md-form.md-outline input[type=time]:focus.invalid,
      .md-form.md-outline input[type=date].invalid,
      .md-form.md-outline input[type=date]:focus.invalid,
      .md-form.md-outline input[type=datetime-local].invalid,
      .md-form.md-outline input[type=datetime-local]:focus.invalid,
      .md-form.md-outline input[type=tel].invalid,
      .md-form.md-outline input[type=tel]:focus.invalid,
      .md-form.md-outline input[type=number].invalid,
      .md-form.md-outline input[type=number]:focus.invalid,
      .md-form.md-outline input[type=search-md].invalid,
      .md-form.md-outline input[type=search-md]:focus.invalid,
      .md-form.md-outline input[type=search].invalid,
      .md-form.md-outline input[type=search]:focus.invalid,
      .md-form.md-outline textarea.md-textarea.invalid,
      .md-form.md-outline textarea.md-textarea:focus.invalid {
        border-color: #f44336;
        box-shadow: inset 0px 0px 0px 1px #f44336; }
      .md-form.md-outline input[type=text]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=text].invalid + label:after,
      .md-form.md-outline input[type=text]:focus.invalid + label:after,
      .md-form.md-outline input[type=password]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=password].invalid + label:after,
      .md-form.md-outline input[type=password]:focus.invalid + label:after,
      .md-form.md-outline input[type=email]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=email].invalid + label:after,
      .md-form.md-outline input[type=email]:focus.invalid + label:after,
      .md-form.md-outline input[type=url]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=url].invalid + label:after,
      .md-form.md-outline input[type=url]:focus.invalid + label:after,
      .md-form.md-outline input[type=time]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=time].invalid + label:after,
      .md-form.md-outline input[type=time]:focus.invalid + label:after,
      .md-form.md-outline input[type=date]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=date].invalid + label:after,
      .md-form.md-outline input[type=date]:focus.invalid + label:after,
      .md-form.md-outline input[type=datetime-local]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=datetime-local].invalid + label:after,
      .md-form.md-outline input[type=datetime-local]:focus.invalid + label:after,
      .md-form.md-outline input[type=tel]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=tel].invalid + label:after,
      .md-form.md-outline input[type=tel]:focus.invalid + label:after,
      .md-form.md-outline input[type=number]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=number].invalid + label:after,
      .md-form.md-outline input[type=number]:focus.invalid + label:after,
      .md-form.md-outline input[type=search-md]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=search-md].invalid + label:after,
      .md-form.md-outline input[type=search-md]:focus.invalid + label:after,
      .md-form.md-outline input[type=search]:focus:not([readonly]).invalid + label,
      .md-form.md-outline input[type=search].invalid + label:after,
      .md-form.md-outline input[type=search]:focus.invalid + label:after,
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]).invalid + label,
      .md-form.md-outline textarea.md-textarea.invalid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.invalid + label:after {
        content: attr(data-error);
        color: #f44336;
        opacity: 1; }
      .md-form.md-outline input[type=text].form-control.valid + label:after,
      .md-form.md-outline input[type=text].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=password].form-control.valid + label:after,
      .md-form.md-outline input[type=password].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=email].form-control.valid + label:after,
      .md-form.md-outline input[type=email].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=url].form-control.valid + label:after,
      .md-form.md-outline input[type=url].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=time].form-control.valid + label:after,
      .md-form.md-outline input[type=time].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=date].form-control.valid + label:after,
      .md-form.md-outline input[type=date].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=datetime-local].form-control.valid + label:after,
      .md-form.md-outline input[type=datetime-local].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=tel].form-control.valid + label:after,
      .md-form.md-outline input[type=tel].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=number].form-control.valid + label:after,
      .md-form.md-outline input[type=number].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=search-md].form-control.valid + label:after,
      .md-form.md-outline input[type=search-md].form-control:focus.valid + label:after,
      .md-form.md-outline input[type=search].form-control.valid + label:after,
      .md-form.md-outline input[type=search].form-control:focus.valid + label:after,
      .md-form.md-outline textarea.md-textarea.form-control.valid + label:after,
      .md-form.md-outline textarea.md-textarea.form-control:focus.valid + label:after {
        top: 4rem;
        left: 0;
        position: absolute; }
      .md-form.md-outline input[type=text].form-control.invalid + label:after,
      .md-form.md-outline input[type=text].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=password].form-control.invalid + label:after,
      .md-form.md-outline input[type=password].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=email].form-control.invalid + label:after,
      .md-form.md-outline input[type=email].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=url].form-control.invalid + label:after,
      .md-form.md-outline input[type=url].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=time].form-control.invalid + label:after,
      .md-form.md-outline input[type=time].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=date].form-control.invalid + label:after,
      .md-form.md-outline input[type=date].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=datetime-local].form-control.invalid + label:after,
      .md-form.md-outline input[type=datetime-local].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=tel].form-control.invalid + label:after,
      .md-form.md-outline input[type=tel].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=number].form-control.invalid + label:after,
      .md-form.md-outline input[type=number].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=search-md].form-control.invalid + label:after,
      .md-form.md-outline input[type=search-md].form-control:focus.invalid + label:after,
      .md-form.md-outline input[type=search].form-control.invalid + label:after,
      .md-form.md-outline input[type=search].form-control:focus.invalid + label:after,
      .md-form.md-outline textarea.md-textarea.form-control.invalid + label:after,
      .md-form.md-outline textarea.md-textarea.form-control:focus.invalid + label:after {
        top: 4rem;
        left: 0;
        position: absolute; }
    .md-form.md-outline > input[type]:-webkit-autofill:not(.browser-default):not([type="search"]) + label,
    .md-form.md-outline > input[type=time]:not(.browser-default) + label {
      transform: translateY(-9px) scale(0.8);
      transform-origin: 0 0;
      background: #fff;
      font-weight: 500;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 1rem;
      left: 8px; }
    .md-form.md-outline > input[type]:-webkit-autofill:not(.browser-default):not([type="search"]) + label.active,
    .md-form.md-outline > input[type=time]:not(.browser-default) + label.active {
      transform: translateY(-9px) scale(0.8);
      transform-origin: 0 0; }
