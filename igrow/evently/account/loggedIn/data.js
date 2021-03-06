function(e, r) {
  var app = $$(this).app;
  var path = app.require("vendor/couchapp/lib/path").init(app.req);
  var data = {
    name : r.userCtx.name,
    uri_name : encodeURIComponent(r.userCtx.name),
    auth_db : encodeURIComponent(r.info.authentication_db) 
  };
  if (r.userCtx.roles.indexOf("_admin") != -1 || r.userCtx.roles.indexOf("author") != -1) {
    if (app.req.path.indexOf("seeds-page") == -1) {
      data.seedPath = path.show("seed")+"/";
      data.seedMessage = "New seed.";
    } else {
      data.seedPath = path.show("edit", app.req.query.startkey[0]);
      data.seedMessage = "Edit this seed.";
    }    
  }
  return data;
}
