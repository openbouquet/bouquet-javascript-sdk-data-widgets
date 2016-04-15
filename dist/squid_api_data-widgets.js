this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_barchart_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"bar_chart\" class=\"squid-api-data-widgets-bar-chart\" />";
  });

this["squid_api"]["template"]["squid_api_basic_displaytype_selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    	<li data-content=\"";
  if (helper = helpers.view) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.view); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isActive), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"fa ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " fa-2x\"></i></li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "class=\"active\"";
  }

  buffer += "<ul class=\"squid-api-data-widgets-displaytype-selector\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_datatable_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='sq-loading' style='display: none; position:absolute; width:100%; top:40%; z-index: 1;'>\r\n	<div class=\"spinner\">\r\n	<div class=\"rect5\"></div>\r\n	<div class=\"rect4\"></div>\r\n	<div class=\"rect3\"></div>\r\n	<div class=\"rect2\"></div>\r\n	<div class=\"rect1\"></div>\r\n	<div class=\"rect2\"></div>\r\n	<div class=\"rect3\"></div>\r\n	<div class=\"rect4\"></div>\r\n	<div class=\"rect5\"></div>\r\n	</div>\r\n</div>\r\n<div id=\"squid-api-data-widgets-data-table\">\r\n	<table class=\"sq-table\">\r\n		<thead>\r\n			<tr></tr>\r\n		</thead>\r\n		<tbody></tbody>\r\n	</table>\r\n	<div id=\"error\"></div>\r\n	<div id=\"stale\">\r\n		<div class=\"reactiveMessage\"><span><i class=\"fa fa-table\"></i><br>\r\n			";
  if (helper = helpers.staleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.staleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</span></div>\r\n	</div>\r\n	<div id=\"re-run\" style=\"display: none;\">\r\n		<div class=\"reactiveMessage\"><span><i class=\"fa fa-refresh\"></i><br>\r\n        	";
  if (helper = helpers.reRunMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reRunMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</span></div>\r\n		<span>\r\n	</div>\r\n	<div class=\"footer\">\r\n		<div id=\"total\">\r\n			Showing <span id=\"count-entries\"></span> of <span id=\"total-entries\"></span> entries\r\n		</div>\r\n		<div id=\"pagination\"></div>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_dimension_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"information\">";
  if (helper = helpers.noDataMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noDataMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<ul class=\"sortable\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.chosenDimensions), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"item\" data-content=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-ellipsis-v\"></i>"
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-data-widgets-dimension-widget\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noChosenDimensions), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_displaytype_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    	<li data-content=\"";
  if (helper = helpers.view) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.view); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isActive), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"fa ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " fa-2x\"></i></li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "class=\"active\"";
  }

  buffer += "<ul class=\"squid-api-data-widgets-displaytype-selector\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_domain_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display filter name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  buffer += "<div class=\"squid-api-data-widgets-domain-selector\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_export_scheduler_index_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <tr class=\"job-item\" data-attr=";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n                    <td>";
  if (helper = helpers.accountID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.accountID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (helper = helpers.reportId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reportId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.report)),stack1 == null || stack1 === false ? stack1 : stack1.format)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    <td>every "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scheduling)),stack1 == null || stack1 === false ? stack1 : stack1.frequency)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </td>\n                    <td>";
  if (helper = helpers.nextExecutionDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nextExecutionDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (helper = helpers.emails) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emails); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td><button class=\"btn btn-secondary run-job\"><i class=\"fa fa-play\"></i></button></td>\n                    <td><button class=\"btn btn-secondary edit-job\"><i class=\"fa fa-pencil-square-o\"></i></button></td>\n                    <td><button class=\"btn btn-secondary delete-job\"><i class=\"fa fa-trash-o\"></i></button></td>\n                </tr>\n            ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-export-scheduler-index-view table-responsive\">\n    <button class=\"btn btn-default create-job\">create job</button>\n    <table class=\"table table-bordered table-striped table-hover\">\n        <thead>\n            <tr>\n                <th>Client Account</th>\n                <th>Report type</th>\n                <th>Format</th>\n                <th>Email Frequency</th>\n                <th>Next Delivery</th>\n                <th>Delivered to</th>\n                <th>Run Now</th>\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n        </thead>\n        <tbody>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.jobs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_export_scheduler_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"squid-api-export-scheduler-widget\">\r\n	<button class=\"btn btn-default\">Schedule <i class=\"fa fa-clock-o\"></i></button>\r\n</div>\r\n";
  });

this["squid_api"]["template"]["squid_api_export_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div class=\"panel panel-default filter-panel\">\r\n			<div class=\"panel-heading\">\r\n				<button type=\"button\" class=\"close\" data-toggle=\"collapse\" \r\n				data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\" aria-expanded=\"false\">\r\n					<i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n				</button>\r\n				<h4 class=\"panel-title\" id=\"myModalLabel\">Export</h4>\r\n			</div>\r\n			<div class=\"panel-body\">\r\n				<button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-expanded=\"false\"></button>\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<span class=\"type\">\r\n				<input type=\"radio\" name=\"format\" value=\"";
  if (helper = helpers.format) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.format); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"type-name\">";
  if (helper = helpers.format) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.format); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			</span>\r\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "checked";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div style=\"display: inline-block;\">\r\n				<span class=\"type\">\r\n					<label>Compression: </label> <input type=\"checkbox\" name=\"compression\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.compression), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"type-name\">gzip</span>\r\n				</span>\r\n			</div>\r\n			";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\r\n		<div id=\"metricSelector\">\r\n		</div>\r\n		";
  }

function program10(depth0,data) {
  
  
  return "\r\n		<div id=\"dimensionSelector\">\r\n		</div>\r\n		<div id=\"metricSelector\">\r\n		</div>\r\n		";
  }

function program12(depth0,data) {
  
  
  return "\r\n		<div>\r\n			<a id=\"view-sql\" class=\"btn btn-default\" target=\"_blank\">View SQL</a>\r\n		</div>\r\n		";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div id=\"curl-view\">\r\n            <br><hr>\r\n			Need to automate exports? Use the <a id=\"curlbtn\">shell commands</a>.\r\n			<div id=\"curl\">\r\n				<p>Sample code to download the analysis results using curl shell command.</p>\r\n				<b>1 - get an authentication token</b>\r\n				<p>replace the 'login' and 'password' fields in the following snippet</p>\r\n				<pre class=\"curl\">curl '";
  if (helper = helpers.apiURL) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.apiURL); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/auth-token' -H 'Origin: ";
  if (helper = helpers.origin) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.origin); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' -H 'Accept-Encoding: gzip,deflate' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: */*' -H 'Cache-Control: no-cache' --data 'customerId=";
  if (helper = helpers.customerId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customerId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&client_id=";
  if (helper = helpers.clientId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.clientId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&redirect_uri=";
  if (helper = helpers.redirectURI) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.redirectURI); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&login=<b>[login]</b>&password=<b>[password]</b>'</pre>\r\n				<b>2 - download the export</b>\r\n				<p>replace the 'access_token' field in the following snippet by the value of the 'tokenId' field returned by the previous script</p>\r\n				<pre class=\"curl\">curl '";
  if (helper = helpers.curl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.curl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' -H 'Origin: ";
  if (helper = helpers.origin) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.origin); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' -H 'Accept-Encoding: gzip,deflate' -H 'Content-Type: application/json' -H 'Accept: application/json, text/javascript, */*; q=0.01' --data-binary $'";
  if (helper = helpers.data) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' --compressed -o ";
  if (helper = helpers.curlFileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.curlFileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</pre>\r\n				<b>3 - view the export</b>\r\n				<p>your analysis results should now be downloaded as</p>\r\n				<pre class=\"curl\">ls ";
  if (helper = helpers.curlFileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.curlFileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</pre>\r\n			</div>\r\n		</div>\r\n		";
  return buffer;
  }

function program16(depth0,data) {
  
  
  return "\r\n			</div>\r\n		</div>\r\n		";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<button type=\"button\" class=\"btn popup-trigger form-control\">";
  if (helper = helpers.buttonLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buttonLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <i class=\"fa fa-download\"></i></button>\r\n	";
  return buffer;
  }

  buffer += "<div class=\"squid-api-data-widgets-export-widget\">\r\n	<div class=\"download-wrapper\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<div class=\"download-formats\">\r\n			<label>Format: </label> \r\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.formats), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayCompression), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n		<div>&nbsp;</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.metricSelectorEnabled), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.analysisConfigurationEnabled), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<div>\r\n			<button id=\"download\" class=\"btn btn-small btn-sm btn-success\" target=\"_blank\">";
  if (helper = helpers.downloadButtonLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.downloadButtonLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</button>\r\n		</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sqlView), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<form id=\"download-form\" style=\"visibility: hidden;\"></form>\r\n	</div>\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInPopup), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_kpi_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<div class='sq-kpi squid-api-data-widgets-kpi-widget'>\r\n		<div class=\"name\">\r\n	        ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n	    </div>\r\n		<div>\r\n			<span class=\"value\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			<span class=\"unit\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n		</div>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.compareToValue), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div>\r\n			<span class=\"compareToValue\">";
  if (helper = helpers.compareToValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.compareToValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n			<span class=\"unit\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n		</div>\r\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.done), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\r\n  		No Data\r\n  	";
  }

function program8(depth0,data) {
  
  
  return "\r\n  		Computing\r\n  	";
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["squid_api"]["template"]["squid_api_materialize_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <div class=\"panel panel-default filter-panel\">\r\n            <div class=\"panel-heading\">\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                        data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                    <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                </button>\r\n                <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n            </div>\r\n        <div class=\"panel-body\">\r\n            <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                    aria-hidden=\"true\"></button>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                    aria-hidden=\"true\"></button>\r\n\r\n            <div id=\"materializedatasets-view\">\r\n                <div>\r\n                    <button id=\"materialize-save-as-domain\" class=\"btn btn-default\"  data-toggle=\"materialize-virtualize-tooltip\" data-placement=\"bottom\"\r\n                       title=\"Create a virtual dataset. The datasets is not actually reinjected but stays as domain without physical existence.\" target=\"_blank\">Save as domain</button>\r\n                </div>\r\n                <div>\r\n                    <button id=\"materialize-save-as-table\" class=\"btn btn-default\" data-toggle=\"materialize-materialize-tooltip\" data-placement=\"bottom\"\r\n                       title=\"Create a physical dataset. The datasets/table is created on the specified database.\" target=\"_blank\">Save as table</button>\r\n                </div>\r\n                <div>\r\n                    <button id=\"materialize-save-on-spark\" class=\"btn btn-default\" data-toggle=\"materialize-spark-tooltip\" data-placement=\"bottom\"\r\n                            title=\"Send the dataset to spark\" target=\"_blank\">Save on Spark</button>\r\n                </div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\r\n        </div>\r\n        </div>\r\n        ";
  }

function program7(depth0,data) {
  
  
  return "\r\n        <a href=\"#\" data-toggle=\"materialize-tooltip\" data-placement=\"top\"\r\n           title=\"You can use this button to reinject the current dataset. For example, you may want to reinject the new dataset in the same database as an other table to save your current work.\">\r\n            <button type=\"button\" class=\"btn popup-trigger form-control\">Save <i class=\"fa fa-cloud\"></i></button>\r\n        </a>\r\n    ";
  }

  buffer += "<div class=\"squid-api-data-widgets-materialize-widget\">\r\n    <div class=\"download-wrapper\">\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.materializeDatasetsView), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInPopup), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_metric_total_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<div class=\"item";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " squid-api-data-widgets-metrictotal-widget\" style=\"padding: 3px; display: inline-block;\" id=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" >\r\n		<table style=\"border:1px solid #DDD; border-collapse: separate; border-spacing: 3px;\">\r\n			<tr>\r\n				<td><span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\r\n			</tr>\r\n			<tr>\r\n				<td><span class=\"value\" style=\"color:#999;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.total)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></td>\r\n			</tr>\r\n		</table>\r\n	</div>\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return " selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_metric_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"information\">";
  if (helper = helpers.noDataMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noDataMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.chosenMetrics), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selectMetric), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        	<div class=\"name\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayMetricValue), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    		<li class=\"item "
    + escapeExpression(((stack1 = (depth0 && depth0.selected)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-selected=\""
    + escapeExpression(((stack1 = (depth0 && depth0.attrSelected)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-content=\""
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    		";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    		<li class=\"item\" data-selected=\""
    + escapeExpression(((stack1 = (depth0 && depth0.attrSelected)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-content=\""
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    	";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        		<div class=\"value\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.total)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        	";
  return buffer;
  }

  buffer += "<ul class=\"squid-api-data-widgets-metric-widget\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noChosenMetrics), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_orderby_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " disabled ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<div class=\"pull-left\">\n			<table>\n				<tr>\n					<td>\n						<span class=\"preview\" style=\"font-size : 14px; padding-right: 5px; position: relative; top: 3px;\">Preview</span>\n					</td>\n					<td>\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.removeOrderDirection), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td>\n						&nbsp;\n						<span style=\"font-size : 14px; font-weight: bold; padding-right: 5px; position: relative; top: 4px;\">";
  if (helper = helpers.limit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.limit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <label style=\"position: relative; top: 4px; font-weight: normal;\">by</label> <select class=\"sq-select form-control\" style=\"display: inline-block; position: relative; bottom: 5px; max-width: 100px;\">\n							<option>none</option>\n							";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.Columns), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						</select>\n					</td>\n				</tr>\n			</table>\n		</div>\n	";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							<span class=\"orderby-direction\" style=\"top: 3px; position: relative; font-weight: bold; font-size: 14px;\">";
  if (helper = helpers.orderByDirectionDisplay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderByDirectionDisplay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span>\n						";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							<div class=\"onoffswitch\">\n			    				<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n			    				<label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n			        				<span class=\"onoffswitch-inner\"></span>\n			       				 	<span class=\"onoffswitch-switch\"></span>\n			    				</label>\n							</div>\n						";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "checked";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n								<option ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n							";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return " selected=\"selected\" ";
  }

  buffer += "<div class=\"orderby-container squid-api-data-widgets-orderby-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.disabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.limit), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_project_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control squid-api-data-widgets-project-selector\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display filter name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_saveasdomain_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <button type=\"button\"  class=\"create btn btn-default\">\r\n                <i class=\"fa fa-plus\"></i> New ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </button>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <div class=\"panel panel-default filter-panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                                data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                            <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                        </button>\r\n                        <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n                    </div>\r\n                <div class=\"panel-body\">\r\n                    <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                            aria-hidden=\"true\"></button>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <h4 class=\"modal-title\" id=\"myModalLabel\">";
  if (helper = helpers.typeLabelPlural) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeLabelPlural); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"squid-api-collection-management-widget\">\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.createRole), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <div class=\"squid-api-data-widgets-saveastable-widget \">\r\n            <div class=\"download-wrapper\">\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                        aria-hidden=\"true\"></button>\r\n                <div style=\"display: inline-block;\">\r\n                    <div><label for=\"name\">Name: </label> <input value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"name\" name=\"name\"></div>\r\n                </div>\r\n                <div id=\"saveasdomain-view\">\r\n                    <div><label for=\"projectName\">Project: </label> <input value=\"";
  if (helper = helpers.projectName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.projectName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"projectName\" name=\"projectName\"></div>\r\n                    <div><label for=\"schemaName\">Schema: </label> <input value=\"";
  if (helper = helpers.schemaName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.schemaName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"schemaName\" name=\"schemaName\"></div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"squid-api-model-management-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close without saving</button>\r\n    <button type=\"button\" class=\"btn btn-default save-close\" data-dismiss=\"modal\">Save and Close</button>\r\n</div>\r\n<!--  end of modal - -->\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_saveastable_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <button type=\"button\"  class=\"create btn btn-default\">\r\n                <i class=\"fa fa-plus\"></i> New ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </button>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <div class=\"panel panel-default filter-panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                                data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                            <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                        </button>\r\n                        <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n                    </div>\r\n                <div class=\"panel-body\">\r\n                    <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                            aria-hidden=\"true\"></button>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <h4 class=\"modal-title\" id=\"myModalLabel\">";
  if (helper = helpers.typeLabelPlural) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeLabelPlural); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"squid-api-collection-management-widget\">\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.createRole), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <div class=\"squid-api-data-widgets-saveastable-widget \">\r\n            <div class=\"download-wrapper\">\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                        aria-hidden=\"true\"></button>\r\n                <div style=\"display: inline-block;\">\r\n                    <div><label for=\"name\">Name: </label> <input value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"name\" name=\"name\"></div>\r\n                </div>\r\n                <div id=\"saveastable-view\">\r\n                    <div><label for=\"projectName\">Project: </label> <input value=\"";
  if (helper = helpers.projectName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.projectName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"projectName\" name=\"projectName\"></div>\r\n                    <div><label for=\"schemaName\">Schema: </label> <input value=\"";
  if (helper = helpers.schemaName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.schemaName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"schemaName\" name=\"schemaName\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"squid-api-model-management-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close without saving</button>\r\n    <button type=\"button\" class=\"btn btn-default save-close\" data-dismiss=\"modal\">Save and Close</button>\r\n</div>\r\n<!--  end of modal - -->\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_saveonspark_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <button type=\"button\"  class=\"create btn btn-default\">\r\n                <i class=\"fa fa-plus\"></i> New ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </button>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <div class=\"panel panel-default filter-panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                                data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                            <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                        </button>\r\n                        <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n                    </div>\r\n                <div class=\"panel-body\">\r\n                    <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                            aria-hidden=\"true\"></button>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <h4 class=\"modal-title\" id=\"myModalLabel\">";
  if (helper = helpers.typeLabelPlural) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeLabelPlural); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"squid-api-collection-management-widget\">\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.createRole), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <div class=\"squid-api-data-widgets-saveastable-widget \">\r\n            <div class=\"download-wrapper\">\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInAccordion), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\"\r\n                        aria-hidden=\"true\"></button>\r\n                <div style=\"display: inline-block;\">\r\n                    <div><label for=\"name\">Name: </label> <input value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"name\" name=\"name\"></div>\r\n                </div>\r\n                <div id=\"saveastable-view\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"squid-api-model-management-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close without saving</button>\r\n    <button type=\"button\" class=\"btn btn-default save-close\" data-dismiss=\"modal\">Save and Close</button>\r\n</div>\r\n<!--  end of modal - -->\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_timeseries_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div id=\"time-unit-selector\">\n        <select class=\"form-control\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.timeUnits), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              <option value=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }

  buffer += "<div class='sq-loading' style='position:absolute; width:100%; top:40%; z-index: 2;'>\n    <div class=\"spinner\">\n    <div class=\"rect5\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n    </div>\n</div>\n<div id=\"chart_container\" class=\"squid-api-data-widgets-timeseries-widget\">\n    <div id=\"yearswitcher\"></div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.timeUnitSelector), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div id=\"metricselector\"></div>\n    <div id=\"stale\">\n        <div class=\"reactiveMessage\">\n            <span><i class=\"fa fa-line-chart\"></i>\n            <br>";
  if (helper = helpers.staleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.staleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n    </div>\n    <div id=\"re-run\" style=\"display: none;\">\n            <div class=\"reactiveMessage\">\n                <span><i class=\"fa fa-refresh\"></i>\n                <br>";
  if (helper = helpers.reRunMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reRunMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n        </div>\n    <div id=\"widget\">\n\n    </div>\n    <div id=\"legend\" />\n    <div id=\"error\" />\n</div>\n";
  return buffer;
  });
(function(root, factory) {
    root.squid_api.controller.AnalysisController = factory(root.Backbone,
            root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = Backbone.View.extend({
        analysis : null,
        config : null,

        initialize : function(options) {
            var me = this;
            this.status = squid_api.model.status;

            if (this.model) {
                this.analysis = this.model;
            } else {
                this.analysis = new squid_api.model.AnalysisJob();
                this.model = this.analysis;
            }

            if (options) {
                // setup options
                if (options.config) {
                    this.config = options.config;
                }
                if (options.onChangeHandler) {
                    this.onChangeHandler = options.onChangeHandler;
                }
                if (options.onStartIndexChangeHandler) {
                    this.onStartIndexChangeHandler = options.onStartIndexChangeHandler;
                }
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }

            // controller

            this.config.on('change:project', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:domain', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:chosenDimensions', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:chosenMetrics', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:limit', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:rollups', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:orderBy', function() {
                me.refreshAnalysis();
            });

            this.config.on('change:selection', function() {
                me.refreshAnalysis();
            });

            this.config.on("change:startIndex", function() {
                me.refreshAnalysis();
            });

            this.customEvents();
        },

        customEvents: function() {
            // to be overridden
        },

        onChangeHandler : function(analysis) {
            squid_api.compute(analysis);
        },

        refreshAnalysis : function(silent) {
            var changed = false;
            var a = this.analysis;
            var config = this.config;
            if (silent !== false) {
                silent = true;
            }

            a.set({
                "id" : {
                    "projectId" : config.get("project"),
                    "analysisJobId" : a.get("id").analysisJobId
                }
            }, {
                "silent" : silent
            });
            a.setParameter("maxResults", this.config.get("maxResults"), silent);
            changed = changed || a.hasChanged();
            var startIndexChange = (a.getParameter("startIndex") !== this.config.get("startIndex"));
            a.setParameter("startIndex", this.config.get("startIndex"), silent);
            changed = changed || a.hasChanged();
            if (this.onStartIndexChangeHandler && startIndexChange) {
                this.onStartIndexChangeHandler.call(this, a);
            }
            a.set({
                "domains" : [ {
                    "projectId" : config.get("project"),
                    "domainId" : config.get("domain")
                } ]
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.setFacets(config.get("chosenDimensions"), silent);
            changed = changed || a.hasChanged();
            a.setMetrics(config.get("chosenMetrics"), silent);
            changed = changed || a.hasChanged();
            a.setSelection(config.get("selection"), silent);
            changed = changed || a.hasChanged();
            a.set({
                "limit" : config.get("limit")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "rollups" : config.get("rollups")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "orderBy" : config.get("orderBy")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();

            if (changed === true) {
                this.onChangeHandler(this.analysis);
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.BarChartView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_barchart_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        format : null,

        d3Formatter : null,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;

            if (this.model) {
                this.listenTo(this.model, 'change:status', this.render);
                this.listenTo(this.model, 'change:error', this.render);
                this.listenTo(this.model, 'change:disabled', this.toggleDisplay);
            }

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (d3) {
                this.d3Formatter = d3.format(",.f");
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (this.d3Formatter) {
                    this.format = function(f){
                        if (isNaN(f)) {
                            return f;
                        } else {
                            return me.d3Formatter(f);
                        }
                    };
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
            $(window).on("resize", _.bind(this.resize(),this));
        },

        toggleDisplay: function() {
            if (this.model.get("disabled") || this.config.get("currentAnalysis") !== "barAnalysis") {
                this.hide();
            } else {
                this.show();
            }
        },

        resize : function() {
            var resizing = true;
            return function() {
                if (this.resizing) {
                    window.clearTimeout(resizing);
                }
                this.resizing = window.setTimeout(_.bind(this.render,this), 100);
            };
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();

        },

        barDataValues: function(cols, rows) {
            // Set up base object + arrays
            var barData = {
                values: [],
                xValues: [],
                yValues: []
            };

            // check to see if we only display totals
            var onlyMetrics = true;
            for (i=0; i<cols.length; i++) {
                if (cols[i].role !== "DATA") {
                    onlyMetrics = false;
                }
            }

            // store bar data
            if (onlyMetrics) {
                // only show metric totals
                for (i=0; i<cols.length; i++) {
                    var col = cols[i];
                    var yAxis = col.name + " Total";
                    for (ix=0; ix<rows.length; ix++) {
                        var xAxis = rows[ix].v[i];
                        barData.xValues.push(xAxis);
                        barData.yValues.push(yAxis);
                        barData.values.push([yAxis, xAxis]);
                    }
                }
            } else {
                for (i=0; i<rows.length; i++) {
                    var item1 = rows[i].v;
                    var yAxis1 = "";
                    var xAxis1;
                    for (ix=0; ix<item1.length; ix++) {
                        if (typeof(item1[ix]) === "string") {
                            if (yAxis1.length === 0) {
                                yAxis1 += item1[ix];
                            } else {
                                yAxis1 += " / " + item1[ix];
                            }
                        } else if (typeof(item1[ix]) === "number") {
                            xAxis1 = item1[ix];
                            barData.xValues.push(item1[ix]);
                            break;
                        }
                    }
                    barData.yValues.push(yAxis1);
                    barData.values.push([yAxis1, xAxis1]);
                }
            }

            return barData;
        },

        getData: function() {
            var data, analysis;

            analysis = this.model;

            // Use the first analyses array
            if (analysis.get("analyses")) {
                analysis = analysis.get("analyses")[0];
            }

            data = analysis.toJSON();
            data.done = this.model.isDone();

            return data;
        },

        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        hide: function() {
            this.$el.hide();
        },

        show: function() {
            this.$el.show();
        },

        renderBase: function(done) {
            this.$el.html(this.template({
                done: done
            }));
        },

        render: function() {
            var me = this;
            var data = this.getData();

            if (data.done) {

                // Print Template
                this.renderBase(true);

                // Obtain Bar Chart Data
                var barData = this.barDataValues(data.results.cols, data.results.rows);

                //Calculate largest value / width of screen
                var maxValue = Math.max.apply(Math, barData.xValues);
                var screenWidth = this.$el.find("#bar_chart").width();

                //ToolTip Declaration
                var tooltip = d3.select('body').append('div')
                    .style('position', 'absolute')
                    .style('padding', '0 10px')
                    .style('background', 'white')
                    .style('opacity', 0);

                // Pre definitions for the bar chart
                var width = screenWidth,
                    barHeight = 30;
                    ySpacing = 45;

                // Set A max / min height
                var height;

                if (barData.values.length < 5) {
                    height = 200;
                } else {
                    height = 500;
                }

                // To make the chart fit (Width)
                xScale = d3.scale.linear()
                    .domain([0, maxValue])
                    .range([0, width - 205]);

                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom');

                // To make the chart fit (Height)
                var yScale = d3.scale.ordinal()
                    .domain(barData.yValues)
                    .rangePoints([0, height]);

                //Define Y axis
                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(10);

                // Bar Chart
                var chart = d3.select("#bar_chart")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("style", "overflow: visible;")
                    .append("g")
                    .attr("class", "chart");

                // Append data container
                var bar = chart.selectAll("div")
                    .data(barData.values)
                    .enter().append("g")
                    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

                // Bar Rectangles with Tooltips / Transition on load
                bar.append("rect")
                    .attr("y", function(d, i) {
                        return i*15;
                    })
                    .attr("x", function(d, i) {
                        return 150;
                    })
                    .attr("width", function() {
                        return 0;
                    })
                    .attr('fill', '#026E87')
                    .attr("height", barHeight)
                    .on('mouseover', function(d) {
                        tooltip.transition()
                            .style('opacity', 1);
                        tooltip.html(d[0] + " - " + me.format(d[1]))
                            .style('left', (d3.event.pageX - 35) + 'px')
                            .style('top',  (d3.event.pageY - 30) + 'px');
                        tempColor = this.style.fill;
                        d3.select(this)
                            .style('opacity', 1)
                            .style('fill', '#1aadcf');
                        })
                    .on('mouseout', function() {
                        tooltip.html("");
                        d3.select(this)
                            .style('opacity', 1)
                            .style('fill', tempColor);
                    })
                    .transition()
                        .attr('width', function(d) {
                            return xScale(d[1]);
                        })
                        .delay(function(d, i) {
                            return i * 20;
                        })
                        .duration(1000)
                        .ease('bounce');

                    // xAxis (Starting 200px from left)
                    xAxis = d3.select("#bar_chart svg")
                        .append("g")
                        .attr('class', 'axis')
                        .attr('width', width)
                        .attr('x', 400)
                        .attr('transform', 'translate(150,' + (height - 1) + ')')
                        .call(xAxis);

                    // yAxis (Starting 150px from right)
                    var yAxisAppend = d3.select("#bar_chart svg")
                        .append("g")
                        .attr('class', 'axis')
                        .attr('height', height)
                        .attr('transform', 'translate(150,0)')
                        .call(yAxis)
                        .selectAll(".tick");

                    // Y aXis label spacing
                    yAxisAppend.attr("transform", function(d, i) {
                        return "translate(0," + (15 + (i * ySpacing)) + ")";
                    });
                } else {
                    // Print Template
                    this.renderBase(false);
                }

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.BasicDisplayTypeSelectorView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_basic_displaytype_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        template : null,
        config : null,
        tableView : null,
        barView : null,
        timeView : null,
        displayOnly : null,

        initialize: function(options) {

            if (options) {
                // setup options
                if (options.config) {
                    this.config = options.config;
                }

                // Store template
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                if (options.displayOnly) {
                    this.displayOnly = options.displayOnly;
                }

                this.tableView = options.tableView;
                this.barView = options.barView;
                this.timeView = options.timeView;
            }


            if (this.model) {
                this.listenTo(this.model,"change", this.render);
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }
            this.listenTo(this.config, "change:selection", this.render);
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        events: {
            "click li": "changeWidget"
        },

        changeWidget: function(item){
            var viewName = item.currentTarget.dataset.content;
            var analysis;
            var currentAnalysis;

            // create the new view
            if (viewName === "tableView") {
                analysis = this.tableView.model;
                currentAnalysis = "tableAnalysis";
            } else if (viewName === "timeView") {
                analysis = this.timeView.model;
                currentAnalysis = "timeAnalysis";
            } else if (viewName === "barView") {
                analysis = this.barView.model;
                currentAnalysis = "barAnalysis";
            }

            this.config.set("currentAnalysis", currentAnalysis);
            this.model.set("currentAnalysis", analysis);
        },

        addCompatibleView : function(list, name) {
            // check it is available
            if (this[name]) {
                list.push(name);
            }
        },

        render: function() {
            var me = this;

            // compute the view types compatible with the model
            var selectedDimension = this.model.get("selectedDimension");
            var compatibleViews = [];

            this.addCompatibleView(compatibleViews, "tableView");
            this.addCompatibleView(compatibleViews, "timeView");
            this.addCompatibleView(compatibleViews, "barView");

            // compute the current selected view
            var analysis = this.model.get("currentAnalysis");
            var currentViewName;

            if (this.tableView) {
                if (analysis === this.tableView.model) {
                    currentViewName = "tableView";
                }
            }
            if (this.barView) {
                if (analysis === this.barView.model) {
                    currentViewName = "barView";
                }
            }
            if (this.timeView) {
                if (analysis === this.timeView.model) {
                    currentViewName = "timeView";
                }
            }

            // display the view selector
            var data = {"options" : []};
            for (idx2 = 0; idx2<compatibleViews.length; idx2++) {
                var view2 = compatibleViews[idx2];
                var icon;
                if (view2 === "tableView") {
                    icon = "fa-table";
                } else if (view2 === "timeView") {
                    icon = "fa-line-chart";
                } else if (view2 === "barView") {
                    icon = "fa-bar-chart";
                }
                var isActive = false;
                if (view2 === currentViewName) {
                    isActive = true;
                    data.currentIcon = icon;
                }
                data.options.push({"view" : view2, "icon" : icon, "isActive" : isActive});
            }

            this.$el.html(this.template(data));

            return this;
        }
    });

    return View;

}));

(function (root, factory) {
    root.squid_api.view.DataTableView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,

        maxRowsPerPage : 10000,

        format : null,

        d3Formatter : null,

        config : null,

        paging : false,

        ordering : false,

        noDataMessage : "No data available in table",

        headerBadges : false,

        paginationView : null,

        rollupSummaryColumn : null,

        rollups : null,

        reRunMessage : "Please manually refresh your analysis",

        staleMessage : "Click refresh to update",

        currentDomain : null,

        initialize : function(options) {
            var me = this;

            // config is used for orderBy
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            if (this.model) {
                this.listenTo(this.model, 'change:status', this.render);
                this.listenTo(this.model, 'change:facets', this.render);
                this.listenTo(this.model, 'change:metricList', this.render);
                this.listenTo(this.model, 'change:orderBy', this.render);
            }

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_datatable_widget;
            }

            // filters are used to get the Dimensions and Metrics names
            if (options.filters) {
                this.filters = options.filters;
            } else {
                this.filters = squid_api.model.filters;
            }

            if (options.maxRowsPerPage) {
                this.maxRowsPerPage = options.maxRowsPerPage;
            }
            if (options.paging) {
                this.paging = options.paging;
            }
            if (options.ordering) {
                this.ordering = options.ordering;
            }
            if (options.noDataMessage) {
                this.noDataMessage = options.noDataMessage;
            }
            if (options.headerBadges) {
                this.headerBadges = options.headerBadges;
            }
            if (options.rollupSummaryColumn) {
                this.rollupSummaryColumn = options.rollupSummaryColumn;
            }
            if (options.staleMessage) {
                this.staleMessage = options.staleMessage;
            }
            if (options.reRunMessage) {
                this.reRunMessage = options.reRunMessage;
            }
            if (d3) {
                this.d3Formatter = d3.format(",");
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (this.d3Formatter) {
                    this.format = function(f){
                        if (isNaN(f)) {
                            return f;
                        } else {
                            return me.d3Formatter(f);
                        }
                    };
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }

            this.renderBaseViewPort();
        },

        events : ({
            "click thead th" : function(event) {
                if (this.ordering) {
                    var originType = $(event.currentTarget).attr("origin-type");
                    if (originType !== "COMPARETO") {
                        var orderBy = this.config.get("orderBy");
                        var expressionValue = $(event.currentTarget).attr("data-content");
                        var obj = {"expression" : {"value" : expressionValue}};
                        if (orderBy) {
                            if (orderBy[0]) {
                                if (orderBy[0].expression) {
                                    if (orderBy[0].expression.value == expressionValue) {
                                        if ($(event.currentTarget).hasClass("ASC")) {
                                            obj.direction = "DESC";
                                        } else {
                                            obj.direction = "ASC";
                                        }
                                    } else {
                                        obj.direction = "DESC";
                                    }
                                }
                            }
                        }
                        this.config.set("orderBy", [obj]);
                    }
                }
            }
        }),

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        /**
         * see : http://stackoverflow.com/questions/10966440/recreating-a-removed-view-in-backbone-js
         */
        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        displayTableHeader : function(selector) {
            var me = this;
            var i;
            var metrics;

            if (! me.headerInformation || this.currentDomain !== this.config.get("domain")) {
                this.currentDomain = this.config.get("domain");
                var parentId = this.config.get("domain");
                return squid_api.getCustomer().then(function(customer) {
                    return customer.get("projects").load(me.config.get("project")).then(function(project) {
                        return project.get("domains").load(parentId).then(function(domain) {
                            return domain.get("metrics").load().then(function(metrics) {
                                var arr = [];
                                for(i=0; i<metrics.size(); i++) {
                                    arr.push(metrics.models[i].toJSON());
                                }
                                me.domainMetrics = arr;
                                me.headerInformation = true;
                                me.displayTableHeader();
                            });
                        });
                    });
                });
            } else  {
                var columns = [];
                var originalColumns;//unaltered by rollup splice
                var invalidSelection = false;
                var status = this.model.get("status");

                var analysis = this.model;
                // in case of a multi-analysis model
                if (analysis.get("analyses")) {
                  analysis = analysis.get("analyses")[0];
                }
                var results = analysis.get("results");
                var rollups;
                if (results && status !== "PENDING" && status !== "RUNNING") {
                    // Analysis computed : use results columns
                    columns = results.cols;

                    // init rollups
                    rollups = analysis.get("rollups");
                    if (rollups && (rollups.length ===0)) {
                        rollups = this.rollups = null;
                    }
                    originalColumns = columns;
                } else {
                    // Analysis not computed yet : use analysis definition
                    if (this.filters.get("selection")) {
                        var obj;
                        var facets = this.model.get("facets");
                        if (facets) {
                            for (i=0; i<facets.length; i++) {
                                obj = squid_api.utils.find(this.filters.get("selection").facets, "id", facets[i].value);
                                if (obj) {
                                    obj.dataType = "STRING";
                                    columns.push(obj);
                                } else {
                                    // impossible to get column data from selection
                                    invalidSelection = true;
                                }
                            }
                        }
                        metrics = this.model.get("metricList");
                        if (metrics) {
                            if (metrics.length === 0) {
                                metrics = squid_api.model.config.get("chosenMetrics");
                            }
                        }
                        if (metrics) {
                            var metric;
                            for (i=0; i<metrics.length; i++) {
                                metric = metrics[i];
                                if (metrics[i].id) {
                                    for (ix=0; ix<me.domainMetrics.length; ix++) {
                                        if (metrics[i].id.metricId === me.domainMetrics[ix].oid) {
                                            metrics[i].name = me.domainMetrics[ix].name;
                                        }
                                    }
                                    obj = squid_api.utils.find(me.domainMetrics, "oid", metrics[i].id.metricId);
                                    if (obj) {
                                        obj.dataType = "NUMBER";
                                    } else {
                                        // impossible to get column data from selection
                                        invalidSelection = true;
                                    }
                                } else {
                                    obj = {
                                            "id" : null,
                                            "name" : metrics[i].name,
                                            "dataType" : "NUMBER"
                                    };
                                }
                                columns.push(obj);
                            }
                        }
                        if (this.config.get("rollups") && Array.isArray(this.config.get("rollups")) && this.config.get("rollups").length>0 && this.rollupSummaryColumn >= 0 && status !== "DONE") {
                            originalColumns = columns.slice();
                            columns.splice(this.config.get("rollups")[0].col, 1);
                        } else {
                            originalColumns = columns;
                        }
                    }
                }

                var orderBy = this.model.get("orderBy");
                if (orderBy) {
                    // add orderBy direction
                    for (col=0; col<columns.length; col++) {
                        if (columns[col]) {
                            columns[col].orderDirection = undefined;
                            for (ix=0; ix<orderBy.length; ix++) {
                                if (this.ordering) {
                                    if (columns[col].definition) {
                                        if (orderBy[ix].expression) {
                                            if (columns[col].definition === orderBy[ix].expression.value) {
                                                columns[col].orderDirection = orderBy[ix].direction;
                                                break;
                                            }
                                        }
                                    } else if (orderBy[ix].expression) {
                                        if (columns[col].id === orderBy[ix].expression.value) {
                                            columns[col].orderDirection = orderBy[ix].direction;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                var rollupColIndex = null;
                var rollupSummaryIndex = null;
                if (rollups) {
                    if ((rollups.length>0)) {
                        if (rollups.length>1 && rollups[0].col === -1) {
                            rollupColIndex = rollups[1].col + 1;
                        } else {
                            rollupColIndex = rollups[0].col + 1;
                        }
                    }
                    if (this.config.get("rollups") && this.rollupSummaryColumn >= 0) {
                        rollupSummaryIndex = this.rollupSummaryColumn + 1;
                    }
                }
                me = this;
                // header
                d3.select(selector).select("thead tr").selectAll("th").remove();

                if (!invalidSelection) {
                    d3.select(selector).select("thead tr").selectAll("th")
                        .data(columns)
                        .enter().append("th")
                        .attr("class", function(d, i) {
                            var str = "";
                            if (rollups) {
                                if (i === 0) {
                                    // hide grouping column
                                    str = str + "hide " + d.dataType;
                                } else if (( rollupSummaryIndex !== null) && (i === rollupColIndex)) {
                                    // hide rollup column
                                    str = str + "hide " + d.dataType;
                                } else {
                                    str = str + d.dataType;
                                }
                            }
                            if (d.orderDirection) {
                                str = str + " " + d.orderDirection;
                            }
                            return str;
                        })
                        .attr("origin-type", function(d) {
                            return d.originType
                        })
                        .html(function(d) {
                            var str = d.name;
                            if (d.orderDirection === "ASC") {
                                str = str + " " + "<span class='sort-direction'>&#xffea;</span>";
                            } else if (d.orderDirection === "DESC") {
                                str = str + " " + "<span class='sort-direction'>&#xffec;</span>";
                            }
                            return str;
                        })
                        .attr("data-content", function(d) {
                            if (d.definition) {
                                return d.definition;
                            } else {
                                return d.id;
                            }
                        });

                    // add class if more than 10 columns
                    if (this.$el.find("thead th").length > 10) {
                        this.$el.find("table").addClass("many-columns");
                    } else {
                        this.$el.find("table").removeClass("many-columns");
                    }
                }
            }
        },

        displayTableContent : function(selector) {
            var me = this;

            var analysis = this.model;
            // in case of a multi-analysis model
            if (analysis.get("analyses")) {
              analysis = analysis.get("analyses")[0];
            }
            var results = analysis.get("results");
            var rollups;

            if (results) {
                rollups = analysis.get("rollups");
                if (rollups && (rollups.length ===0)) {
                    rollups = this.rollups = null;
                }

                var rollupColIndex = null;
                var rollupSummaryIndex = null;
                if (rollups) {
                    if ((rollups.length>0)) {
                        if (rollups.length>1 && rollups[0].col === -1) {
                            rollupColIndex = rollups[1].col + 1;
                        } else {
                            rollupColIndex = rollups[0].col + 1;
                        }
                    }
                    if (this.config.get("rollups") && this.rollupSummaryColumn >= 0) {
                        rollupSummaryIndex = this.rollupSummaryColumn + 1;
                    }
                }
                // apply paging and number formatting
                var data = {};
                data.results = {"cols" : results.cols, "rows" : []};
                rows = results.rows;
                for (rowIdx = 0; (rowIdx<rows.length && rowIdx<this.maxRowsPerPage); rowIdx++) {
                    row = rows[rowIdx];
                    newRow = {v:[]};
                    for (colIdx = 0; colIdx<results.cols.length; colIdx++) {
                        v = row.v[colIdx];
                        if (results.cols[colIdx].extendedType) {
                            var words = results.cols[colIdx].name.split(" ");
                            var toRound = true;
                            for (i=0; i<words.length; i++) {
                                // see if column header contains the text duration / time
                                if (words[i].toLowerCase() == "duration" || words[i].toLowerCase() == "time") {
                                    toRound = false;
                                    // parse value with moment
                                    var d = moment.duration(parseFloat(v), 'milliseconds');
                                    // obtain hours / minutes & seconds
                                    var hours = d.asHours();
                                    var minutes = d.asMinutes();
                                    var days = d.asDays();
                                    var years = d.asYears();
                                    var seconds = d.asSeconds();
                                    var milliseconds = d.asMilliseconds();
                                    var timeData = d._data;
                                    // contruct readable time values
                                    if (milliseconds > 1) {
                                        v = this.d3Formatter(Math.round(timeData.milliseconds * 100) / 100);
                                        if (seconds > 1) {
                                            v = timeData.seconds + "s";
                                            if (minutes > 1) {
                                                v = timeData.minutes + "m " + v;
                                                if (hours > 1) {
                                                    v = timeData.hours + "h " + v;
                                                    if (days > 1) {
                                                        v = timeData.days + "d " + v;
                                                        if (years > 1) {
                                                            v = timeData.years + "y " + v;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (typeof v === "number" && toRound) {
                                v = this.d3Formatter(Math.round(parseFloat(v) * 100) / 100);
                            }
                        }
                        newRow.v.push(v);
                    }
                    data.results.rows.push(newRow);
                }

                // Rows
                d3.select(selector).select("tbody").selectAll("tr").remove();
                var tr = d3.select(selector).select("tbody").selectAll("tr")
                    .data(data.results.rows)
                    .enter()
                    .append("tr");

                // Cells
                tr.selectAll("td")
                    .data(function(d) {
                        return d.v;
                    })
                    .enter()
                    .append("td")
                    .attr("class", function(d, i) {
                        if (rollups) {
                            if (i === 0) {
                                // hide grouping column
                                return "hide";
                            } else if ((rollupSummaryIndex !== null) && (i === rollupColIndex)) {
                                // hide rollup column
                                return "hide";
                            } else if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
                                if (parseInt(this.parentNode.__data__.v[0]) === 1) {
                                    // this is a total (grouped) line
                                    this.parentNode.className = "group";
                                }
                                if (parseInt(this.parentNode.__data__.v[0]) >= 1) {
                                  // this is a rollup sub level line
                                  return "new-category";
                                }
                            } else if ((i === 1 && parseInt(this.parentNode.__data__.v[0]) === 1)) {
                                // this is a total line
                                this.parentNode.className = "group";
                                return "new-category";
                            } else if (parseInt(this.parentNode.__data__.v[0]) > 1) {
                                // this is a rollup sub level line
                                return "new-category";
                            } else if ((parseInt(this.parentNode.__data__.v[0]) === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
                                // detect total column
                                this.parentNode.className = "total-column";
                            }
                            // Detect Group & Empty Value
                            if (this.parentNode.className === "group" && d.length === 0) {
                                me.categoryColSpan(this);
                            }
                        }
                    })
                    .text(function(d, i) {
                        var text = d;
                        if (rollups) {
                            if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
                                if (parseInt(this.parentNode.__data__.v[0]) === 1) {
                                    // this is a total (grouped) line
                                    text = this.parentNode.__data__.v[rollupColIndex];
                                }
                            } else if (i === 1){
                                if (parseInt(this.parentNode.__data__.v[0]) === 1) {
                                    // this is a total line
                                    text = "Total for "+data.results.cols[rollupColIndex].name;
                                }
                            }
                            if (i === 2) {
                                if ((parseInt(this.parentNode.__data__.v[0]) === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
                                    text = "Total";
                                }
                            }
                        }
                        return text;
                    });

                // display total
                this.$el.find("#count-entries").html(""+ results.startIndex + " - " + (results.startIndex + data.results.rows.length));
                this.$el.find("#total-entries").html(""+results.totalSize);
            }
        },

        categoryColSpan : function(node) {
            var siblings = node.parentNode.childNodes;
            var colSpan = 1;

            for (i=0; i<siblings.length; i++) {
                // Obtain Sibling With Matching Class
                if (d3.select(siblings[i]).classed("new-category")) {
                    if (d3.select(siblings[i]).attr("colspan")) {
                        colSpan = parseInt(d3.select(siblings[i]).attr("colspan"));
                    }
                    // Increment ColSpan Value
                    d3.select(siblings[i]).attr("colspan", colSpan + 1);
                }
            }

            // Remove Node
            node.remove();
        },

        renderBaseViewPort : function() {
            this.$el.html(this.template({
                "staleMessage" : this.staleMessage,
                "reRunMessage" : this.reRunMessage
            }));
            if (this.paging) {
                this.paginationView = new squid_api.view.PaginationView( {
                    model : this.model,
                    config : this.config,
                    el : this.$el.find("#pagination")
                });
                this.paginationView.render();
            }
        },

        render : function() {
            if (this.el) {
                var selector = "#"+this.el.id+" .sq-table";

                // display table header
                this.displayTableHeader(selector);

                if (this.model.get("status") === "DONE") {
                    this.$el.find("#total").show();
                    this.$el.find(".sq-loading").hide();
                    this.$el.find("#stale").hide();
                    this.$el.find("#re-run").hide();
                    this.$el.find(".sort-direction").show();
                    this.$el.find("#table-container").show();

                    if (!this.model.get("error")) {
                        // display results
                        this.displayTableContent(selector);
                        if (this.paging) {
                            this.paginationView.render();
                            this.$el.find("#pagination").show();
                        }
                        this.$el.find("#error").html("");
                    } else {
                        var analysis = this.model;
                        // in case of a multi-analysis model
                        if (analysis.get("analyses")) {
                            analysis = analysis.get("analyses")[0];
                        }
                        if (this.model.get("error").enableRerun) {
                            this.$el.find("#re-run").show();
                        } else {
                            this.$el.find("#error").html("<div id='error'>" + this.model.get("error").message + "</div>");
                        }
                    }
                }

                if (this.model.get("status") === "RUNNING") {
                    // computing in progress
                    this.$el.find(".sq-loading").show();
                    this.$el.find("#stale").hide();
                    this.$el.find(".sort-direction").show();
                    this.$el.find("#error").html("");
                    this.$el.find("#table-container").hide();
                }

                if (this.model.get("status") === "PENDING") {
                    // refresh needed
                    d3.select(selector).select("tbody").selectAll("tr").remove();
                    this.$el.find("#pagination").hide();
                    this.$el.find("#total").hide();
                    this.$el.find(".sq-loading").hide();
                    this.$el.find("#stale").show();
                    this.$el.find("#error").html("");
                }
            }

            return this;
        }

    });

    return View;
}));

(function(root, factory) {
    root.squid_api.controller.DateAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,

        customEvents: function() {
            var me = this;
            this.config.on('change:timeUnit', function() {
                me.refreshAnalysis();
            });
        },

        refreshAnalysis : function(silent) {
            var changed = false;
            var a = this.analysis;
            var config = this.config;
            if (silent !== false) {
                silent = true;
            }

            a.set({
                "id" : {
                    "projectId" : config.get("project"),
                    "analysisJobId" : a.get("id").analysisJobId
                }
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "domains" : [ {
                    "projectId" : config.get("project"),
                    "domainId" : config.get("domain")
                } ]
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            var selection = this.config.get("selection");
            if (selection) {
                var dateFound = false;
                for (i=0; i<selection.facets.length; i++) {
                    // search for date facet within chosenDimensions
                    var facet = selection.facets[i];
                    var chosenDimensions = config.get("chosenDimensions");
                    var id = facet.id;
                    if (chosenDimensions) {
                        var existsInChosen = chosenDimensions.includes(id);
                        if (config.get("chosenDimensions").length > 0) {
                            if (existsInChosen && facet.dimension.valueType == "DATE") {
                                if (facet.dimension.type == "CONTINUOUS") {
                                    this.setFacets(a, facet.id);
                                    dateFound = true;
                                    break;
                                } else {
                                    this.status.set({"message" : "dimension " + facet.name + " is not indexed for use with this visulisation"});
                                }
                            }
                        }
                    }
                }
                if (! dateFound) {
                    // if no date is found, use the first one found
                    for (i=0; i<selection.facets.length; i++) {
                        if (selection.facets[i].dimension.type == "CONTINUOUS" && selection.facets[i].dimension.valueType == "DATE") {
                            this.setFacets(a, selection.facets[i].id);
                            break;
                        }
                    }
                }
            }
            changed = changed || a.hasChanged();
            a.setMetrics(config.get("chosenMetrics"), silent);
            changed = changed || a.hasChanged();
            a.setSelection(config.get("selection"), silent);
            changed = changed || a.hasChanged();
            a.set({
                "limit" : config.get("limit")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "rollups" : config.get("rollups")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "orderBy" : config.get("orderBy")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();

            if (changed === true) {
                this.onChangeHandler(this.analysis);
            }
        },

        setFacets: function(a, id) {
            var toDate = false;
            var beyondLimit = false;
            squid_api.utils.checkAPIVersion(">=4.2.1").done(function(v){
                toDate = true;
            });
            squid_api.utils.checkAPIVersion(">=4.2.5").done(function(v){
                beyondLimit = true;
            });
            if (toDate) {
                var timeUnit = this.config.get("timeUnit");
                var dimensions =  this.config.get("chosenDimensions");
                a.setFacets(dimensions, {silent : true});
                var facets = a.get("facets");
                if (facets) {
                    var expression = "TO_DATE(" + id + ")";
                    if (timeUnit) {
                        expression = timeUnit + "("+ id + ")";
                    }
                    facets.unshift({value: expression});
                }
            } else {
                a.setFacets([id], silent);
            }
            if (beyondLimit) {
                a.set('beyondLimit', [{"col" : 0}]);
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DimensionView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_dimension_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        selectDimension: false,
        filters : null,
        noDataMessage: "No Dimensions have been chosen",

        initialize: function(options) {
            var me = this;

            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }

                if (options.filters) {
                    this.filters = options.filters;
                } else {
                    this.filters = squid_api.model.filters;
                }
                if (options.selectDimension) {
                    this.selectDimension = options.selectDimension;
                }
                if (options.noDataMessage) {
                    this.noDataMessage = options.noDataMessage;
                }
            }

            // listen for selection change as we use it
            this.filters.on("change:selection", function() {
                me.render();
            });

            this.model.on("change:chosenDimensions", function() {
                me.render();
            });

            this.model.on("change:selectedDimension", function() {
                me.render();
            });

            this.render();
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        events: {
            // Dimension Sorting
            "change": function() {
                var dimensions = this.$el.find(".sortable li");
                var selected = [];

                for (i = 0; i < dimensions.length; i++) {
                    selected.push($(dimensions[i]).attr("data-content"));
                }

                // Update
                this.model.set({"chosenDimensions" : selected});

            },
            // Dimension Selection
            "click li": function(item) {
                if (this.selectDimension) {
                    var itemClicked = $(item.currentTarget);

                    if (itemClicked.attr("data-selected")) {
                        itemClicked.removeAttr("data-selected");
                        itemClicked.removeClass("ui-selected");
                        this.model.set({"selectedDimension" : null});
                    } else {
                        itemClicked.attr("data-selected", "true");
                        itemClicked.siblings().removeAttr("data-selected").removeClass("ui-selected");
                        this.model.set({"selectedDimension" : itemClicked.attr("data-content")});
                    } 
                } 
            }
        },

        render: function() {
            var chosenDimensions = this.model.get("chosenDimensions");
            var jsonData = {"chosenDimensions" : []};
            var html;
            
            // iterate through all filter facets
            var selection = this.filters.get("selection");
            if (chosenDimensions && selection) {
                var facets = selection.facets;
                if (facets) {
                    var chosenFacets = [];
                    for (var dc=0; dc<chosenDimensions.length; dc++) {
                        for (var d=0; d<facets.length; d++){
                            var facet = facets[d];
                            if (chosenDimensions[dc] === facet.id) {
                                var item = {};
                                item.id = facet.id;
                                if (facet.name) {
                                    item.value = facet.name;
                                } else {
                                    item.value = facet.dimension.name;
                                }
                                chosenFacets.push(item);
                            }
                        } 
                    }
                    jsonData.chosenDimensions = chosenFacets;
                }
            } else {
                html = this.template({"noChosenDimensions" : true, "noDataMessage" : this.noDataMessage});
            }
                
            if (jsonData.chosenDimensions.length === 0) {
                html = this.template({"noChosenDimensions" : true, "noDataMessage" : this.noDataMessage});
            } else {
                html = this.template(jsonData);
            }
            
            this.$el.html(html);

            this.$el.show();

            // Make dimesions sortable & selectable
            this.dimensionSort();

            // Select selected dimension
            this.selectItem();

            return this;
        },

        selectItem: function() {
            var me = this;
            var dimensions = this.$el.find(".sortable li");
            if (this.selectDimension) {
                for (i = 0; i < dimensions.length; i++) {
                    if ($(dimensions[i]).attr("data-content") === me.model.get("selectedDimension")) {
                        $(dimensions[i]).attr("data-selected", "true");
                        $(dimensions[i]).addClass("ui-selected");
                    }
                }
            }
        },

        dimensionSort : function() {
            this.$el.find(".sortable").sortable({
                revert: true,
                stop: function(event, ui) { ui.item.trigger("change"); }
            });
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DisplayTypeSelectorView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_displaytype_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        template : null,
        config : null,
        tableView : null,
        barView : null,
        timeView : null,

        initialize: function(options) {

            if (options) {
                // setup options
                if (options.config) {
                    this.config = options.config;
                }

                // Store template
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }

                this.tableView = options.tableView;
                this.barView = options.barView;
                this.timeView = options.timeView;
            }


            if (this.model) {
                this.listenTo(this.model,"change", this.render);
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }
            this.listenTo(this.config, "change:selection", this.render);
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        events: {
            "click li": "changeWidget"
        },

        changeWidget: function(item){
            var viewName = item.currentTarget.dataset.content;
            var analysis;
            var currentAnalysis;

            // create the new view
            if (viewName === "tableView") {
                analysis = this.tableView.model;
                currentAnalysis = "tableAnalysis";
            } else if (viewName === "timeView") {
                analysis = this.timeView.model;
                currentAnalysis = "timeAnalysis";
            } else if (viewName === "barAnalysis") {
                analysis = this.barView.model;
                currentAnalysis = "barAnalysis";
            }

            this.config.set("currentAnalysis", currentAnalysis);
            this.model.set("currentAnalysis", analysis);
        },

        addCompatibleView : function(list, name) {
            // check it is available
            if (this[name]) {
                list.push(name);
            }
        },

        render: function() {

            // compute the view types compatible with the model
            var selectedDimension = this.model.get("selectedDimension");
            var compatibleViews = [];
            this.addCompatibleView(compatibleViews, "tableView");

            if (selectedDimension && (selectedDimension.length>0)) {
                this.addCompatibleView(compatibleViews, "barView");

            }
            if (squid_api.controller.facetjob.getTemporalFacet(squid_api.model.config.get("selection"))) {
                this.addCompatibleView(compatibleViews, "timeView");
            }

            // compute the current selected view
            var analysis = this.model.get("currentAnalysis");
            var currentViewName;

            if (this.tableView) {
                if (analysis === this.tableView.model) {
                    currentViewName = "tableView";
                }
            }
            if (this.barView) {
                if (analysis === this.barView.model) {
                    currentViewName = "barView";
                }
            }
            if (this.timeView) {
                if (analysis === this.timeView.model) {
                    currentViewName = "timeView";
                }
            }

            // display the view selector
            var data = {"options" : []};
            for (idx2 = 0; idx2<compatibleViews.length; idx2++) {
                var view2 = compatibleViews[idx2];
                var icon;
                if (view2 === "tableView") {
                    icon = "fa-table";
                } else if (view2 === "timeView") {
                    icon = "fa-line-chart";
                } else if (view2 === "barView") {
                    icon = "fa-bar-chart";
                }
                var isActive = false;
                if (view2 === currentViewName) {
                    isActive = true;
                }
                data.options.push({"view" : view2, "icon" : icon, "isActive" : isActive});
            }
            var html = this.template(data);
            this.$el.html(html);

            return this;
        }
    });

    return View;

}));

(function (root, factory) {
    root.squid_api.view.DomainSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_domain_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        displayAllDomains : false,
        onChangeHandler: null,

        initialize: function(options) {
            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                
                if (options.onChangeHandler) {
                    this.onChangeHandler = options.onChangeHandler;
                }
                if (options.multiSelectView) {
                    this.multiSelectView = options.multiSelectView;
                }
                
                if (typeof options.displayAllDomains !== 'undefined') {
                    this.displayAllDomains = options.displayAllDomains;
                }
            }
            
            if (!this.model) {
                this.model = squid_api.model.config;
            }
            this.model.on("change:domain", this.render, this);
            this.model.on("change:project", this.render, this);
            
        },

        events: {
            "change .sq-select": function(event) {
                if (this.onChangeHandler) {
                    this.onChangeHandler.call(this,event);
                } else {
                    // default behavior
                    var selectedOid = event.target.value || null;
                    this.model.set({
                        "domain" : selectedOid,
                        "chosenDimensions" : null,
                        "selectedDimension" : null,
                        "chosenMetrics" : null,
                        "selectedMetric" : null
                    });
                }
            }
        },

        render: function() {
            var me = this;
            var domain, domains, jsonData = {"selAvailable" : true, "options" : [{"label" : "Select Domain", "value" : "", "selected" : false}]};
            var hasSelection = false;
            var selectedDomain = me.model.get("domain");
            // get the domains from the project;
            domains = new squid_api.model.DomainCollection();
            domains.parentId = {
                projectId : me.model.get("project")
            };
            domains.fetch().then( function(domains) {
                for (var i=0; i<domains.length; i++) {
                    domain = domains[i];
                    var selected = false;
                    if (domain.oid === selectedDomain) {
                        selected = true;
                        hasSelection = true;
                    }

                    var displayed = true;

                    if (displayed) {
                        var option = {"label" : domain.name, "value" : domain.oid, "selected" : selected};
                        jsonData.options.push(option);
                    }
                }
                
                if (!hasSelection) {
                    // select first option
                    jsonData.options[0].selected = true;
                }

                var html = me.template(jsonData);
                me.$el.html(html);
                me.$el.show();

                // Initialize plugin
                if (me.multiSelectView) {
                    me.$el.find("select").multiselect();
                }
            });

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DataExportScheduler = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({
        template: null,
        IndexView: null,
        ExportJobModel: null,
        modalElementClassName : "squid-api-admin-widgets-export-scheduler",
        ExportJobCollection: null,
        schedulerApiUri: null,
        exportJobs: null,
        hiddenFields: null,
        widgetAccessible: false,

        initialize: function (options) {
            widget = this;

            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = squid_api.template.squid_api_export_scheduler_widget;
                }
                if (options.schedulerApiUri) {
                    this.schedulerApiUri = options.schedulerApiUri;
                }
                if (options.hiddenFields) {
                    this.hiddenFields = options.hiddenFields;
                }
                if (options.reports) {
                    this.reports = options.reports.get("items");
                }
                if (options.modalElementClassName) {
                	this.modalElementClassName = options.modalElementClassName;
                }
                if (options.status) {
                    this.status = options.status;
                } else {
                    this.status = squid_api.model.status;
                }
            }

            this.IndexView = squid_api.template.squid_api_export_scheduler_index_view;

            ExportJobModel = Backbone.DeepModel.extend({
                urlRoot: this.schedulerApiUri + "/jobs",
                idAttribute: "_id",
                url: function () {
                    var base =
                        _.result(this, 'urlRoot') ||
                        _.result(this.collection, 'url') ||
                        urlError();
                    if (this.isNew()) {
                        return base + "?access_token=" + squid_api.model.login.get("accessToken");
                    }
                    var id = this.get(this.idAttribute);
                    return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id) + "?access_token=" + squid_api.model.login.get("accessToken");
                }
            });

            ExportJobCollection = Backbone.Collection.extend({
                model: ExportJobModel,
                urlRoot: this.schedulerApiUri,
                url: function () {
                    var url = this.urlRoot + "/jobs/";
                    url = url + "?access_token=" + squid_api.model.login.get("accessToken");
                    return url;
                }
            });

            exportJobs = new ExportJobCollection();

            // listeners
            this.listenTo(squid_api.model.login, "change:accessToken", this.fetchAndRender);
            this.listenTo(exportJobs, 'change reset sync', this.render);
        },

        events: {
            "click button": "renderIndex"
        },

        fetchAndRender: function () {
            exportJobs.fetch({
                success: function (collection, response) {
                    if (response.statusCode === 200) {
                        widget.widgetAccessible = true;
                    } else {
                        widget.widgetAccessible = false;
                    }
                },
                error: function () {
                    widget.widgetAccessible = false;
                }
            });
        },

        closeModal : function(modal) {
        	modal.close();
        	modal.remove();
        },

        renderIndex: function () {
            var me = this;
            var IndexView = Backbone.View.extend({
                model: exportJobs,
                initialize: function () {
                    this.template = squid_api.template.squid_api_export_scheduler_index_view;
                    this.listenTo(exportJobs, "reset change remove sync", this.render);
                },
                events: {
                    "click .create-job": function () {
                        widget.renderForm();
                    },
                    "click .edit-job": function (event) {
                        var id = $(event.target).parents(".job-item").attr("data-attr");
                        widget.renderForm(id);
                    },
                    "click .run-job": function (event) {
                        var id = $(event.target).parents(".job-item").attr("data-attr");
                        var url = me.schedulerApiUri + "/jobs/" + id + "?run=1&access_token=" + squid_api.model.login.get("accessToken");
                        $.ajax({
                            method: "GET",
                            url: url
                        });
                        me.status.set("message", "you have manually triggered a job to run");
                    },
                    "click .delete-job": function (event) {
                        var id = $(event.target).parents(".job-item").attr("data-attr");
                        var job = exportJobs.get(id);
                        job.destroy({
                            success: function () {
                                me.status.set("message", "job successfully deleted");
                            }
                        });
                        exportJobs.remove(job);
                    }
                },

                render: function () {
                    var jsonData = {"jobs": []};
                    for (var i = 0; i < this.model.models.length; i++) {
                        for (ix = 0; ix < me.reports.length; ix++) {
                            if (me.reports[ix].oid === this.model.models[i].get("reportId")) {
                                this.model.models[i].set("reportName", me.reports[ix].name);
                            }
                        }
                        // format jsonData
                        var job = this.model.models[i].toJSON();
                        if (job.nextExecutionDate) {
                            job.nextExecutionDate = moment(job.nextExecutionDate).format("DD-MM-YYYY");
                        }
                        jsonData.jobs.push(job);
                    }
                    this.$el.html(this.template(jsonData));

                    this.$el.find(".table").DataTable({
                        paging: false
                    });

                    return this;
                }
            });

            this.indexModal = new Backbone.BootstrapModal({
                content: new IndexView(),
                title: "Scheduled Usage Reports"
            }).open();

            // modal wrapper class
            $(this.indexModal.el).addClass(this.modalElementClassName);

            $(this.indexModal.el).find(".modal-dialog").addClass("modal-lg");

            /* bootstrap doesn't remove modal from dom when clicking outside of it.
            Check to make sure it has been removed whenever it isn't displayed.
             */
            if (me.indexModal.el) {
            	$(me.indexModal.el).one('hidden.bs.modal', function () {
                    me.closeModal(me.indexModal);
                });
                $(me.indexModal.el).find(".close").one("click", function() {
                    $(me.indexModal.el).trigger("hidden.bs.modal");
                });
                $(me.indexModal.el).find(".cancel").one("click", function() {
                    $(me.indexModal.el).trigger("hidden.bs.modal");
                });
            }
        },

        getSchema: function () {
            return $.ajax({
                url: this.schedulerApiUri + "/Schema/?access_token=" + squid_api.model.login.get("accessToken"),
            });
        },

        renderForm: function (id) {
        	var me = this;
            this.getSchema().then(function (data) {
                var modalHeader;
                if (id) {
                    model = exportJobs.where({"_id": id})[0];
                    modalHeader = model.get("reportName") + " scheduled usage report";
                } else {
                    model = new ExportJobModel();

                    var reportId = config.get("report");
                    var reportName;
                    for (i = 0; i < widget.reports.length; i++) {
                        if (widget.reports[i].oid === reportId) {
                            reportName = widget.reports[i].name;
                        }
                    }
                    modalHeader = "schedule a usage report for " + reportName;
                }
                // construct schema ignoring hidden fields
                var schema = {};
                for (var x in data) {
                    if (widget.hiddenFields.indexOf(x) === -1) {
                        schema[x] = {};
                        schema[x].editorClass = "form-control";
                        if ((typeof data[x].options.title !== 'undefined')) {
                            schema[x].title = data[x].options.title;
                        }
                        if (data[x].instance === "Date") {
                            schema[x].type = "Date";
                        } else if (data[x].instance === "Array") {
                            schema[x].type = "List";
                            schema[x].itemType = "Text";
                        } else {
                            if (data[x].enumValues) {
                                schema[x].type = "Select";
                                schema[x].options = data[x].enumValues;
                            } else if (data[x].options.enum) {
                                schema[x].type = "Select";
                                schema[x].options = data[x].options.enum;
                            } else {
                                schema[x].type = "Text";
                            }
                        }
                    }
                }

                widget.formContent = new Backbone.Form({
                    schema: schema,
                    model: model
                });

                var FormView = Backbone.View.extend({
                    initialize: function () {
                        this.render();
                    },
                    render: function () {
                        this.$el.html(widget.formContent.render().el);
                        return this;
                    }
                });

                var formModal = new Backbone.BootstrapModal({
                    content: new FormView(),
                    title: modalHeader
                }).open();

                /* bootstrap doesn't remove modal from dom when clicking outside of it.
                Check to make sure it has been removed whenever it isn't displayed.
                 */
                 $(formModal.el).one('hidden.bs.modal', function () {
                     me.closeModal(formModal);
                 });
                 $(formModal.el).find(".close").one("click", function() {
                     $(formModal.el).trigger("hidden.bs.modal");
                 });
                 $(formModal.el).find(".cancel").one("click", function() {
                     $(formModal.el).trigger("hidden.bs.modal");
                 });

                formModal.on('ok', function () {
                    // the form is used in create and edit mode.
                    var values = widget.formContent.getValue();

                    // manipulate data
                    values.customerId = squid_api.model.customer.get("id");
                    values.userId = squid_api.model.login.get("userId");

                    var emails = widget.formContent.getValue().emails; //Return an array with [old,values,new,values]
                    // if length == 1 then new job
                    // if lenght == 0 then I should keep the last one entered
                    if (emails.length >1) {
                        // Take the new values assuming no deletion
                        emails = widget.formContent.getValue().emails.slice((((widget.formContent.getValue().emails.length - 1) / 2) + 1), widget.formContent.getValue().emails.length);
                        // computing the separator old new values using the first old value.
                        if (widget.formContent.getValue().emails.lastIndexOf(widget.formContent.getValue().emails[0]) > 0) {
                            emails = widget.formContent.getValue().emails.slice(widget.formContent.getValue().emails.lastIndexOf(widget.formContent.getValue().emails[0]), widget.formContent.getValue().emails.length);
                        }
                    }
                    values.emails = emails;

                    if (id) {
                        // EDIT aka PUT /jobs/:id
                        var job = exportJobs.get(id);
                        job.attributes.emails = values.emails;
                        job.set(values);
                        job.save({}, {
                            success: function() {
                                var msg = "";
                                if (model.get("errors")) {
                                    var errors = model.get("errors");
                                    for (var x in errors) {
                                        if (errors[x].message) {
                                            msg = msg + errors[x].message + "";
                                        }
                                    }
                                } else {
                                    exportJobs.add(model);
                                    $(formModal.el).trigger("hidden.bs.modal");
                                    msg = msg + "job successfully modified";
                                }
                                me.status.set("message", msg);
                            }
                        });
                    } else {
                        // CREATE aka POST /jobs/

                        var config = squid_api.model.config.toJSON();
                        values.state = config;
                    
                        // Getting the accountID (shared code with PQ Counter)
                        var accountID = 0;
                        var facets = config.selection.facets;
                        for (var i = 0; i < facets.length; i++) {
                            if (facets[i] && facets[i].selectedItems && facets[i].selectedItems.length === 1) {
                                var selection = facets[i].selectedItems[0];
                                if (selection.attributes && selection.attributes.accountID) {
                                    accountID = selection.attributes.accountID.replace("accountID","");
                                }
                            }
                        }
                        values.accountID = accountID;
                        values.projectId = config.project;
                        values.bookmarkId = config.bookmark;
                        values.reportId = config.report;

                        var newJob = new ExportJobModel(values);
                        newJob.save({}, {
                            success: function (model) {
                                var msg = "";

                                if (model.get("errors")) {
                                    var errors = model.get("errors");
                                    for (var x in errors) {
                                        if (errors[x].message) {
                                            msg = msg + errors[x].message + "";
                                        }
                                    }
                                } else {
                                    exportJobs.add(model);
                                    $(formModal.el).trigger("hidden.bs.modal");
                                    msg = msg + "job successfully saved";
                                }
                                me.status.set("message", msg);
                            }
                        });
                    }
                });

            });
        },

        render: function () {
            var html = this.template();
            this.$el.html(html);

            // activate / disactivate button
            if (this.widgetAccessible) {
                this.$el.find("button").prop("visibility", 'visible');
            } else {
                this.$el.find("button").prop("visibility", 'hidden');
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DataExport = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,
        renderTo: null,
        compression : true,
        curlCollapsed : true,
        displayInAccordion : false,
        viewPort : null,
        formats : [{"format" : "csv", "mime-type" : "text/csv", "template" : null}],
        selectedFormatIndex : 0,
        templateData : null,
        displayScripting : true,
        displayCompression : true,
        materializeDatasetsView : false,
        buttonLabel: "Export",
        popupDialogClass : "squid-api-export-panel-popup",
        downloadButtonLabel : "Download",
        analysisConfigurationEnabled : false,
        metricSelectorEnabled : false,
        configClone : null,
        dimensionSelector : null,
        metricSelector : null,

        initialize : function(options) {
            var me = this;

            // setup options
            if (options.config) {
                this.config = options.config;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_export_widget;
            }
            if (options.formats) {
                this.formats = options.formats;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
            	this.displayInAccordion = true;
                this.viewPort = $(this.renderTo);
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
            	this.displayInPopup = true;
            }
            if (options.sqlView) {
            	this.sqlView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.materializeDatasetsView) {
                this.materializeDatasetsView = true;
            }
            if (options.downloadButtonLabel) {
            	this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.displayScripting === false) {
                this.displayScripting = false;
            }
            if (options.displayCompression === false) {
                this.displayCompression = false;
            }
            if (options.analysisConfigurationEnabled === true) {
                this.analysisConfigurationEnabled = true;
            }
            if (options.metricSelectorEnabled === true) {
                this.metricSelectorEnabled = true;
            }
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }
            if (options.buttonLabel) {
                this.buttonLabel = options.buttonLabel;
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }

            if (this.analysisConfigurationEnabled) {
                // create a config clone to be used a the model for the DimensionSelector
                this.configClone = new Backbone.Model();
                this.configClone.set(_.clone(this.config.attributes));

                // create a dimensionSelector
                this.dimensionSelector = new squid_api.view.DimensionSelector({
                    model : this.configClone,
                    singleSelect : false,
                    available : "availableDimensions",
                    template : options.dimensionSelectorTemplate
                });
                
                // create a metricSelector
                this.metricSelector = new squid_api.view.MetricSelectorView({
                    model : this.configClone,
                    available : "availableMetrics",
                    template : options.metricSelectorTemplate
                });
                

                this.listenTo(this.configClone, 'change:chosenDimensions', function() {
                    // update the analysis with extra dimensions
                    me.model.setFacets(this.configClone.get("chosenDimensions"));
                });

                this.listenTo(this.configClone, 'change:chosenMetrics', function() {
                    // update the analysis with extra metrics
                    me.model.setMetrics(this.configClone.get("chosenMetrics"));
                });

                this.listenTo(this.config, 'change', function() {
                    // reflect config changes to configClone
                    me.configClone.set(_.clone(me.config.attributes));
                    me.dimensionSelector.render();
                    me.metricSelector.render();
                });
            }

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function() {
                    if (me.analysisConfigurationEnabled) {
                        // reflect config changes to configClone
                        me.configClone.set(_.clone(me.model.attributes));
                    }
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function() {
                    me.refreshViewSqlUrl();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function() {
                    if(this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function() {
                    me.render();
                    me.enabled();
                });
            }
        },

        enabled: function() {
        	var viewPort = this.viewPort;
        	if (this.popup) {
        		viewPort = this.popup;
        	}
        	if (this.model.get("enabled")) {
        		this.$el.find("button").prop("disabled", false);
        		viewPort.find("button#download").prop("disabled", false);
        	} else {
        		this.$el.find("button").prop("disabled", true);
        		viewPort.find("button#download").prop("disabled", true);
        	}
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        clickedFormat : function (event) {
            var t = event.target;
            this.selectedFormatIndex = null;
            for (var i=0; i<this.formats.length;i++) {
                if (this.formats[i].format === t.value) {
                    this.selectedFormatIndex = i;
                }
            }
            this.refreshViewSqlUrl();
            if(this.materializeDatasetsView === true) {
                this.refreshViewMaterializeDatasets();
            }
        },

        clickedCompression : function (event) {
            var t = event.target;
            this.compression = (t.checked);
            this.refreshViewSqlUrl();
            if(this.materializeDatasetsView === true) {
                this.refreshViewMaterializeDatasets();
            }
        },

        downloadAnalysisResults : function(currentJobId) {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.popup) {
            	viewPort = this.popup;
            }

            // create download link
            var analysisJobResults;
            var selectedFormat = this.formats[this.selectedFormatIndex];
            var velocityTemplate;
            var postMethod;
            var downloadBtn = viewPort.find("#download");
            var downloadForm = viewPort.find("#download-form");

            if (!selectedFormat.template) {
                // use getResults method
                analysisJobResults = new squid_api.model.ProjectAnalysisJobResult();
                analysisJobResults.addParameter("format",selectedFormat.format);
                postMethod = "GET";
            } else {
                // use render method
                analysisJobResults = new squid_api.model.ProjectAnalysisJobRender({"format" : selectedFormat.format});
                analysisJobResults.setParameter("type", selectedFormat.type);
                analysisJobResults.setParameter("timeout", null);
                // build the template

                if (selectedFormat.format === "xml") {
                    if (me.model.get("templateData").options.xmlType) {
                        velocityTemplate = selectedFormat.template[me.model.get("templateData").options.xmlType](me.model.get("templateData"));
                    } else {
                        velocityTemplate = selectedFormat.template(me.model.get("templateData"));
                    }
                } else {
                    velocityTemplate = selectedFormat.template(me.model.get("templateData"));
                }
                postMethod = "POST";
            }
            if (me.compression) {
                analysisJobResults.addParameter("compression","gzip");
            } else {
                analysisJobResults.addParameter("compression","none");
            }
            analysisJobResults.set({
                "id": currentJobId,
                "oid": currentJobId.oid
            });

            downloadBtn.removeClass("disabled");

            downloadForm.attr("action",analysisJobResults.url());
            downloadForm.attr("method",postMethod);
            downloadForm.empty();
            downloadForm.append("<input type='hidden' name='access_token' value='"+analysisJobResults.getParameter("access_token")+"'/>");
            downloadForm.append("<input type='hidden' name='compression' value='"+analysisJobResults.getParameter("compression")+"'/>");
            if (velocityTemplate) {
                downloadForm.append("<input type='hidden' name='template' value='"+base64.encode(velocityTemplate)+"'/>");
            }
            if (analysisJobResults.getParameter("type")) {
                downloadForm.append("<input type='hidden' name='type' value='"+analysisJobResults.getParameter("type")+"'/>");
            }
            if (analysisJobResults.getParameter("format")) {
                downloadForm.append("<input type='hidden' name='format' value='"+analysisJobResults.getParameter("format")+"'/>");
            }
            if (analysisJobResults.getParameter("timeout")) {
                downloadForm.append("<input type='hidden' name='timeout' value='"+analysisJobResults.getParameter("timeout")+"'/>");
            }
            downloadForm.submit();
        },

        refreshViewSqlUrl : function() {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
            	viewPort = this.popup;
            }
            if (me.currentJobId) {
                // create download link
                var analysisJobResults;
                var selectedFormat = this.formats[this.selectedFormatIndex];
                // use getResults method
                analysisJobResults = new squid_api.model.ProjectAnalysisJobViewSQL();
                analysisJobResults.addParameter("format",selectedFormat.format);
                analysisJobResults.set({
                    "id": me.currentJobId,
                    "oid": me.currentJobId.oid
                });
                var downloadBtn = viewPort.find("#view-sql");
                downloadBtn.attr("href",analysisJobResults.url());
                downloadBtn.removeClass("disabled");
            }
        },

        refreshViewMaterializeDatasets : function() {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }


            // prepare materialize datasets download link
            var downloadBtnD = $(me.viewPort).find("#view-materializedatasets");
            downloadBtnD.addClass("disabled");

            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.InternalanalysisjobModel();
                downloadAnalysis.set(
                    {
                        "name": viewPort.find("#destDomain").val(),
                        "options": {
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId": viewPort.find("#destProject").val(),
                            "destSchema": viewPort.find("#destSchema").val()
                        }
                    }
                );
                downloadAnalysis.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },

        download : function() {
            var me = this;
            var viewPort = $(this.viewPort);
            if (this.displayInPopup) {
            	viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            var enabled = this.model.get("enabled");
            if (!analysis) {
                analysis = this.model;
            }
            var downloadBtn = viewPort.find("#download");
            downloadBtn.addClass("disabled");

            if (analysis.get("id").projectId && enabled !== false) {
                var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                downloadAnalysis.set(analysis.attributes);
                downloadAnalysis.setParameter("timeout", 10000);
                downloadAnalysis.setParameter("maxResults", 1);
                downloadAnalysis.set("autoRun", false);
                downloadAnalysis.set({
                    "id": {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    }});
                //
                squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                .done(function(analysis) {
                    if (analysis.get("limit") || (analysis.get("template"))) {
                        // trigger the analysis computation and wait until it's done (in a loop)
                        squid_api.controller.analysisjob.getAnalysisJobResults(null, analysis).done(function(results) {
                            // get the results
                            me.downloadAnalysisResults(results.get("id"));
                        })
                        .fail(function() {
                            console.error("createAnalysisJob failed");
                            downloadBtn.removeClass("disabled");
                        });
                    } else {
                        // compute and get the results without retrying (streaming way)
                        me.downloadAnalysisResults(analysis.get("id"));
                    }
                })
                .fail(function() {
                    console.error("createAnalysisJob failed");
                    downloadBtn.removeClass("disabled");
                });
            }
        },

        render : function() {
            var me = this;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            var selectedFormat = this.formats[this.selectedFormatIndex];
            var formatsDisplay = [];
            for (var i=0; i<this.formats.length;i++) {
                formatsDisplay[i] = this.formats[i];
                if (i === this.selectedFormatIndex) {
                    formatsDisplay[i].selected = true;
                }
            }

            if (this.displayInAccordion) {
                this.$el.html("<button type='button' class='btn btn-open-export-panel' data-toggle='collapse' aria-expanded='false' data-target='" + this.renderTo + "'> "+ this.downloadButtonLabel + "<span class='glyphicon glyphicon-download-alt'></span></button>");
                if (analysis.get("enabled") === false) {
                    $("button.btn-open-export-panel").prop('disabled', true);
                } else {
                    $("button.btn-open-export-panel").prop('disabled', false);
                }
            }

            var data, curl, curlFileName;
            if (me.displayScripting !== false) {
                // render the curl snippet
                var exportAnalysis = new squid_api.model.ProjectAnalysisJob();
                exportAnalysis.addParameter("format", this.formats[this.selectedFormatIndex].format);
                if (this.compression) {
                    exportAnalysis.addParameter("compression","gzip");
                }
                exportAnalysis.addParameter("access_token","[access_token]");
                exportAnalysis.set(analysis.attributes);
                exportAnalysis.set(
                   "id", {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    });

                // escape all spaces in the json injected into cURL
                data = JSON.stringify(exportAnalysis).replace(/\'/g, '\\\'');
                curlFileName = "analysis";
                if (selectedFormat.format) {
                    curlFileName += "."+selectedFormat.format;
                }
                if (this.compression) {
                    curlFileName += ".gz";
                }
                curl = exportAnalysis.url().replace(/\[access_token\]/g, '<b>[access_token]</b>');
            }

            $(this.viewPort).html(this.template({
                "displayInAccordion" : this.displayInAccordion,
                "downloadButtonLabel" : this.downloadButtonLabel,
                "displayInPopup" : this.displayInPopup,
                "sqlView" : this.sqlView,
                "materializeDatasetsView" : this.materializeDatasetsView,
                "data-target" : this.renderTo,
                "formats": formatsDisplay,
                "displayCompression" : this.displayCompression,
                "compression": (this.compression),
                "curl": curl,
                "curlFileName" : curlFileName,
                "origin": "https://api.squidsolutions.com",
                "data": data,
                "customerId" : squid_api.customerId,
                "clientId" : squid_api.clientId,
                "redirectURI":"https://api.squidsolutions.com",
                "apiURL":squid_api.apiURL,
                "buttonLabel": this.buttonLabel,
                "downloadButtonLabel" : this.downloadButtonLabel,
                "metricSelectorEnabled" : this.metricSelectorEnabled,
                "analysisConfigurationEnabled" : this.analysisConfigurationEnabled
                })
            );

            // prepare SQL download link
            var downloadBtn = $(me.viewPort).find("#view-sql");
            downloadBtn.addClass("disabled");

            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                downloadAnalysis.set(analysis.attributes);
                downloadAnalysis.set({
                    "id": {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    },
                    "autoRun": false});
                squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                .done(function() {
                    me.currentJobId = downloadAnalysis.get("id");
                    me.refreshViewSqlUrl();
                })
                .fail(function() {
                    console.error("createAnalysisJob failed");
                });
            }

            if (this.dimensionSelector) {
                // setup dimension selector
                this.dimensionSelector.setElement(this.viewPort.find("#dimensionSelector"));
                this.dimensionSelector.render();
            }

            if (this.metricSelector) {
                // setup metric selector
                this.metricSelector.setElement(this.viewPort.find("#metricSelector"));
                this.metricSelector.renderBase();
                this.metricSelector.render();
            }

            // apply cURL panel state
            if (me.curlCollapsed) {
                $(this.viewPort).find('#curl').hide();
            } else {
                $(this.viewPort).find('#curl').show();
            }

            // Click Handlers
            $(this.viewPort).find("#curlbtn").click(function() {
            	var viewPort = $(me.viewPort);
            	if (me.displayInPopup) {
            		viewPort = me.popup;
            	}

                me.curlCollapsed = !me.curlCollapsed;
                if (me.curlCollapsed) {
                	viewPort.find('#curl').fadeOut();
                } else {
                	viewPort.find('#curl').fadeIn();
                }
            });

            $(this.viewPort).find('[name="format"]').click(
                function(event) {
                    me.clickedFormat(event);
                });
            $(this.viewPort).find('[name="compression"]')
            .click(function(event) {
                me.clickedCompression(event);
            });

            $(this.viewPort).find("#download").click(function() {
                me.download();
            });
            if(this.materializeDatasetsView === true) {
                $(this.viewPort).find("#view-materializedatasets").click(function () {
                    me.refreshViewMaterializeDatasets();
                });
            }
            if (this.displayInPopup) {
                // remove any existing popups
                $("." + this.popupDialogClass).remove();

                this.popup = this.$el.find(".download-wrapper").dialog({
                    dialogClass: this.popupDialogClass,
                    autoOpen: false,
                    position: {
                        my: "left-70 top+13", at: "left-70 bottom", of: this.$el.find("button.popup-trigger")
                    },
                    clickOutside: true, // clicking outside the dialog will close it
                    clickOutsideTrigger: this.$el.find("button.popup-trigger"), // Element (id or class) that triggers the dialog opening
                });

                // Click Event for filter panel button
                this.$el.find("button.popup-trigger").click(function() {
                    if (me.popup.dialog("isOpen")) {
                    	me.popup.dialog( "close" );
                    } else {
                    	me.popup.dialog( "open" );
                    }
                });
            }

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.controller.FiltersController = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({
        filters : null,
        config : null,
        onChangeHandler : null,
        timeFacetDef : [],

        initialize: function(options) {
            this.config = squid_api.model.config;

            if (this.model) {
                this.filters = this.model;
            } else {
                this.filters = squid_api.model.filters;
            }

            if (options) {
                this.onChangeHandler = options.onChangeHandler;
            }

            // check for new filter selection made by config update
            this.listenTo(this.config, 'change:selection', this.initFilters);
        },

        initFilters : function() {
            var me = this;
            var domainId = this.config.get("domain");
            var projectId = this.config.get("project");

            if (projectId && domainId) {
                var domainPk = {
                        "projectId" : projectId,
                        "domainId" : domainId
                };

                // launch the default filters computation
                var filters = new squid_api.model.FiltersJob();
                filters.set("id", {
                    "projectId": projectId
                });
                filters.set("engineVersion", "2");
                filters.setDomainIds([domainPk]);

                console.log("compute (initFilters)");
                var timeFacets = [];
                $.when(squid_api.controller.facetjob.compute(filters, this.config.get("selection")))
                .always(function() {
                    // update global filters
                    me.filters.set({
                        "domains": filters.get("domains"), 
                        "id" : filters.get("id")
                    }, {
                        "silent" : true
                    });
                    // search for time facets
                    var sel = filters.get("selection");
                    if (sel && sel.facets) {
                        var facets = sel.facets;
                        for (var i = 0; i < facets.length; i++) {
                            var facet = facets[i];
                            if (facet.dimension.type === "CONTINUOUS" && facet.dimension.valueType === "DATE") {
                                timeFacets.push(facet);
                            }
                        }
                    }
                    // delegate further processing
                    me.changed(filters, timeFacets);
                });
            } else {
                console.log("WARN : selection changed but project or domain are null");
            }
        },

        /**
         *   responsible providing default behavoir in order to:
         *   1. detecting a time facet to set the config
         *   2. automatically selecting a currently active facet range
         *   3. setting the facet selection
         */
        changed: function(filters, timeFacets) {
            var selection = filters.get("selection");
            var results = filters.get("results");
            var configPeriod = this.config.get("period");
            var domain = this.config.get("domain");
            var timeFacet = null;
            if (configPeriod && configPeriod[domain]) {
                // pick the time facet corresponding to the selected period
                for (i=0; i<timeFacets.length; i++) {
                    if (configPeriod[domain] === timeFacets[i].id && ! timeFacets[i].error) {
                        timeFacet = timeFacets[i];
                        break;
                    }
                }
            }
            if (!timeFacet) {
                // pick the first time facet
                for (i=0; i<timeFacets.length; i++) {
                    if (timeFacets[i].dimension.valueType === "DATE" && timeFacets[i].dimension.type === "CONTINUOUS"  && ! timeFacets[i].error) {
                        timeFacet = timeFacets[i];
                        break;
                    }
                }
            }
            if (timeFacet) {
                // set period to the selected timefacet
                if (configPeriod) {
                    if (configPeriod[domain]) {
                        if (configPeriod[domain] !== timeFacet.id) {
                            configPeriod[domain] = timeFacet.id;
                        }
                    } else {
                        configPeriod[domain] = timeFacet.id;
                    }
                } else {
                    var obj = {};
                    obj[domain] = timeFacet.id;
                    configPeriod = obj;
                }
                this.config.set("period", configPeriod);
                
                if (this.onChangeHandler) {
                    this.onChangeHandler(selection, timeFacets);
                } else {
                    // defaultBehaviour
                    if (timeFacet.selectedItems.length === 0) {
                        // no date range selected : apply default time selection rules
                        var minDate;
                        var maxDate;
                        if (timeFacet.items.length > 0) {
                            minDate = timeFacet.items[0].lowerBound;
                            maxDate = timeFacet.items[0].upperBound;
                        } else {
                            // if no min and max, arbitrary select a 50 years range
                            minDate = moment().subtract("50", "years").startOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
                            maxDate = moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
                        }
                        // select a one month date range
                        timeFacet.selectedItems = [{
                            upperBound : maxDate, 
                            lowerBound : moment(maxDate).subtract("1", "month").format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000",
                            type : "i"}];
                        for (ix=0; ix<selection.facets.length; ix++) {
                            if (selection.facets[ix].id === timeFacet.id) {
                                selection.facets[ix] = timeFacet;
                            }
                        }
                        // apply selection to config (will trigger new facet computation)
                        this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
                    } else {
                        this.filters.set({
                            "selection": selection,
                            "results" : results}
                        );
                    }
                }
            } else {
                this.filters.set({
                    "selection": selection,
                    "results" : results}
                );
            }
        },

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.KPIView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,

        format : null,

        initialize : function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_kpi_widget;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.1f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            var jsonData, results, values;
            if (this.model.isDone()) {
                jsonData = [];
                jsonData.done = true;
                results = this.model.get("results");
                if (results) {
                    var cols = results.cols;

                    // resolve compareTo columns
                    var compareMap = {};
                    for (var i = 0; i < cols.length; i++) {
                        var colA = cols[i];
                        if (colA.originType === "COMPARETO") {
                            // key = col oid, value = compare col index
                            compareMap[colA.id] = i;
                        }
                    }

                    // build display data
                    var values = results.rows[0].v;
                    for (var i=0; i<cols.length; i++) {
                        var col = cols[i];
                        if (col.originType === "USER") {
                            var kpi = {};
                            kpi.value = this.format(values[i]);
                            var compareIndex = compareMap[col.id];
                            if (compareIndex) {
                                kpi.compareToValue = this.format(values[compareIndex]);
                            }
                            kpi.unit = "";
                            kpi.name = col.name;
                            if (typeof kpi.compareToValue != "undefined"
                                && kpi.compareToValue != null) {
								var lvalue = parseFloat(values[i]);
								var rvalue = parseFloat(values[compareIndex]);
                                kpi.growth = (((lvalue - rvalue) / rvalue) * 100).toFixed(2);
                                if (kpi.growth > 0) {
                                    kpi.compareTextColor = 'text-success';
                                    kpi.compareClass = 'glyphicon-arrow-up';
                                }  else if (kpi.growth < 0) {
                                    kpi.compareTextColor = 'text-danger';
                                    kpi.compareClass = 'glyphicon-arrow-down';
                                } else {
                                    kpi.growth = 0;
                                    kpi.compareTextColor = 'text-info';
                                    kpi.compareClass = 'glyphicon-transfer';
                                }
                            }
                            jsonData.push(kpi);
                        }
                    }
                }
            }
            this.$el.html(this.template(jsonData));
            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.Materialize = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template: null,
        renderTo: null,
        compression: true,
        displayInAccordion: false,
        viewPort: null,
        formats: [{"format": "csv", "mime-type": "text/csv", "template": null}],
        selectedFormatIndex: 0,
        templateData: null,
        displayScripting: true,
        displayCompression: true,
        materializeDatasetsView: false,
        downloadButtonLabel: "Create Your DataFrame",
        popupDialogClass: "squid-api-materialize-panel-popup",
        mdomainCollection: null,
        mprojectCollection: null,
        mdomainModal: null,
        mdomainButton: null,
        mprojectModal: null,
        mprojectButton: null,
        saveAsTableModal: null,
        saveAsDomainModal: null,
        saveOnSparkModal: null,

        initialize: function (options) {
            var me = this;

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function () {
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    if (this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function () {
                    me.render();
                    me.enabled();
                });
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_materialize_widget;
            }
            if (options.formats) {
                this.formats = options.formats;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
                this.displayInAccordion = true;
                this.viewPort = this.renderTo;
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
                this.displayInPopup = true;
            }

            if (options.mprojectCollection) {
                this.mprojectCollection = options.mprojectCollection;
            }
            if (options.mprojectModal) {
                this.mprojectModal = options.mprojectModal;
            }
            if (options.mprojectButton) {
                this.mprojectButton = options.mprojectButton;
            }

            if (options.mdomainCollection) {
                this.mdomainCollection = options.mdomainCollection;
            }
            if (options.mdomainModal) {
                this.mdomainModal = options.mdomainModal;
            }
            if (options.mdomainButton) {
                this.mdomainButton = options.mdomainButton;
            }

            if (options.materializeDatasetsView) {
                this.materializeDatasetsView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.displayScripting === false) {
                this.displayScripting = false;
            }
            if (options.displayCompression === false) {
                this.displayCompression = false;
            }
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }

            var saveAsTableView = new squid_api.view.SaveAsTable({
                model: this.model
            });

            var saveAsDomainView = new squid_api.view.SaveAsDomain({
                model: this.model
            });


            this.saveAsTableModal = new squid_api.view.ModalView({
                view: saveAsTableView
            });

            this.saveAsDomainModal = new squid_api.view.ModalView({
                view: saveAsDomainView
            });

            var saveOnSparkView = new squid_api.view.SaveOnSpark({
                model: this.model
            });

            this.saveOnSparkModal = new squid_api.view.ModalView({
                view: saveOnSparkView
            });

            //var ddfCollection = new api.view.ProjectCollectionManagementWidget({
            //    onSelect: function() {
            //        ddfModal.close();
            //    }
            //});

            //var ddfModal = new api.view.ModalView({
            //    view : ddfCollection
            //});
            //
            //var ddfButton = new api.view.ProjectSelectorButton({
            //    el : '#destProject'
            //});
            //
            //ddfButton.$el.click(function() {
            //    ddfModal.render();
            //});

        },

        infovirtualize: function (event) {
            //if ($(this.viewPort).find('.squid-api-materialize-panel-popup')) {
            $(this.viewPort).find('[data-toggle="materialize-virtualize-tooltip"]').tooltip('enable');
            $(this.viewPort).find('[data-toggle="materialize-virtualize-tooltip"]').tooltip();

            //}
        },

        deinfovirtualize: function (event) {
            $(this.viewPort).find('[data-toggle="materialize-virtualize-tooltip"]').tooltip('disable');
        },

        infomaterialize: function (event) {
            //if ($(this.viewPort).find('.squid-api-materialize-panel-popup')) {
            $(this.viewPort).find('[data-toggle="materialize-materialize-tooltip"]').tooltip('enable');
            $(this.viewPort).find('[data-toggle="materialize-materialize-tooltip"]').tooltip();

            //}
        },

        deinfomaterialize: function (event) {
            $(this.viewPort).find('[data-toggle="materialize-materialize-tooltip"]').tooltip('disable');
        },

        infodestination: function (event) {
            //if ($(this.viewPort).find('.squid-api-materialize-panel-popup')) {
            this.popup.find("#materialize-destination-tooltip").tooltip('enable');
            this.popup.find("#materialize-destination-tooltip").tooltip();
            //$(this.viewPort).find('[data-toggle="materialize-destination-tooltip"]').tooltip();
            //}
        },

        infodataset: function (event) {
            this.popup.find('[data-toggle="materialize-tooltip"]').tooltip('enable');
            this.popup.find('[data-toggle="materialize-tooltip"]').tooltip();

        },



        enabled: function () {
            var viewPort = this.viewPort;
            if (this.popup) {
                viewPort = this.popup;
            }
            if (this.model.get("enabled")) {
                this.$el.find("button").prop("disabled", false);
                viewPort.find("button#download").prop("disabled", false);
            } else {
                this.$el.find("button").prop("disabled", true);
                viewPort.find("button#download").prop("disabled", true);
            }
        },

        setModel: function (model) {
            this.model = model;
            this.initialize();
        },

        clickedFormat: function (event) {
            var t = event.target;
            this.selectedFormatIndex = null;
            for (var i = 0; i < this.formats.length; i++) {
                if (this.formats[i].format === t.value) {
                    this.selectedFormatIndex = i;
                }
            }
            if (this.materializeDatasetsView === true) {
                this.refreshViewMaterializeDatasets();
            }
        },

        clickedVirtualize: function (event) {
            console.log("Virtualize clicked");
            var t = event.target;
            this.virtualize = (t.checked);
            if (this.materializeDatasetsView === true) {
                this.refreshViewMaterializeDatasets();
            }
        },


        refreshViewMaterializeDatasets: function () {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }


            // prepare materialize datasets download link
            var downloadBtnD = $(me.viewPort).find("#view-materializedatasets");
            downloadBtnD.addClass("disabled");

            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.InternalanalysisjobModel();
                downloadAnalysis.set(
                    {
                        "name": this.popup.find("#destDomain").val(),
                        "options": {
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId": this.popup.find("#destProject").val(),
                            "destSchema": this.popup.find("#destSchema").val()
                        }
                    }
                );
                downloadAnalysis.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },

        download: function () {
            var me = this;
            var viewPort = $(this.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            var enabled = this.model.get("enabled");
            if (!analysis) {
                analysis = this.model;
            }
            var downloadBtn = viewPort.find("#download");
            downloadBtn.addClass("disabled");

            if (analysis.get("id").projectId && enabled !== false) {
                var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                downloadAnalysis.set(analysis.attributes);
                downloadAnalysis.setParameter("timeout", 10000);
                downloadAnalysis.setParameter("maxResults", 1);
                downloadAnalysis.set("autoRun", false);
                downloadAnalysis.set({
                    "id": {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    }
                });
                //
                squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                    .done(function (analysis) {
                        if (analysis.get("limit") || (analysis.get("template"))) {
                            // trigger the analysis computation and wait until it's done (in a loop)
                            squid_api.controller.analysisjob.getAnalysisJobResults(null, analysis).done(function (results) {
                                    // get the results
                                    me.downloadAnalysisResults(results.get("id"));
                                })
                                .fail(function () {
                                    console.error("createAnalysisJob failed");
                                    downloadBtn.removeClass("disabled");
                                });
                        } else {
                            // compute and get the results without retrying (streaming way)
                            me.downloadAnalysisResults(analysis.get("id"));
                        }
                    })
                    .fail(function () {
                        console.error("createAnalysisJob failed");
                        downloadBtn.removeClass("disabled");
                    });
            }
        },

        saveAsDomain : function(){
            //Popup
            this.saveAsDomainModal.render();
        },

        saveAsTable : function(){
            this.saveAsTableModal.render();
        },

        saveOnSpark : function(){
            this.saveOnSparkModal.render();
        },

        render: function () {
            var me = this;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            var selectedFormat = this.formats[this.selectedFormatIndex];
            var formatsDisplay = [];
            for (var i = 0; i < this.formats.length; i++) {
                formatsDisplay[i] = this.formats[i];
                if (i === this.selectedFormatIndex) {
                    formatsDisplay[i].selected = true;
                }
            }

            if (this.displayInAccordion) {
                this.$el.html("<button type='button' class='btn btn-open-export-panel' data-toggle='collapse' data-target=" + this.renderTo + "> " + this.downloadButtonLabel + "<span class='glyphicon glyphicon-download-alt'></span></button>");
                var facets = analysis.get("facets");
                var metrics = analysis.get("metrics");
                if ((!facets || facets.length === 0) && (!metrics || metrics.length === 0)) {
                    $("button.btn-open-materialize-panel").prop('disabled', true);
                } else {
                    $("button.btn-open-materialize-panel").prop('disabled', false);
                }
            }

            $(this.viewPort).html(this.template({
                    "displayInAccordion": this.displayInAccordion,
                    "downloadButtonLabel": this.downloadButtonLabel,
                    "displayInPopup": this.displayInPopup,
                    "materializeDatasetsView": this.materializeDatasetsView,
                    "data-target": this.renderTo,
                    "formats": formatsDisplay,
                    "displayVirtualize": this.displayVirtualize,
                    "virtualize": (this.virtualize),
                    "origin": "https://api.squidsolutions.com",
                    "customerId": squid_api.customerId,
                    "clientId": squid_api.clientId,
                    "redirectURI": "https://api.squidsolutions.com",
                    "apiURL": squid_api.apiURL
                })
            );


            //var mprojectButton = new squid_api.view.ProjectSelectorButton({
            //    el: '#destProject'
            //});
            //
            //mprojectButton.$el.click(function () {
            //    me.mprojectModal.render();
            //});

            var dfCollection = new squid_api.view.ProjectCollectionManagementWidget({
                onSelect: function() {
                    dfModal.close();
                }
            });

            var dfModal = new squid_api.view.ModalView({
                view : dfCollection
            });

            var dfButton = new squid_api.view.ProjectSelectorButton({
                el : '#destProject'
            });

            dfButton.$el.click(function() {
                dfModal.render();
            });

            //var mdomainButton = new squid_api.view.ProjectSelectorButton({
            //    el: '#destDomain'
            //});
            //
            //mdomainButton.$el.click(function () {
            //    me.mdomainModal.render();
            //});



            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                downloadAnalysis.set(analysis.attributes);
                downloadAnalysis.set({
                    "id": {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    },
                    "autoRun": false
                });
                squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                    .done(function () {
                        me.currentJobId = downloadAnalysis.get("id");
                    })
                    .fail(function () {
                        console.error("createAnalysisJob failed");
                    });
            }

            $(this.viewPort).find('#materialize-save-as-table').mouseover(
                function (event) {
                    if (me.popup.dialog("isOpen")) {
                        me.infomaterialize(event);
                    } else {
                        me.deinfomaterialize(event);
                    }
                }
            );

            $(this.viewPort).find('#materialize-save-as-domain').mouseover(
                function (event) {
                    if (me.popup.dialog("isOpen")) {
                        me.infovirtualize(event);
                    } else {
                        me.deinfovirtualize(event);
                    }
                }
            );

            $(this.viewPort).find('[data-toggle="materialize-tooltip"]').mouseover(
                function (event) {
                    if (!me.popup.dialog("isOpen")) {
                        me.infodataset(event);
                    }
                }
            );

            $(this.viewPort).find("#materialize-save-as-domain").click(function() {
                me.saveAsDomain();
            });

            $(this.viewPort).find("#materialize-save-as-table").click(function() {
                me.saveAsTable();
            });

            $(this.viewPort).find("#materialize-save-on-spark").click(function() {
                me.saveOnSpark();
            });

            $(this.viewPort).find('#virtualize').mouseover(
                function (event) {
                    me.infovirtualize(event);
                }
            );


            $(this.viewPort).find('[name="virtualize"]')
                .click(function (event) {
                    me.clickedVirtualize(event);
                });


            if (this.materializeDatasetsView === true) {
                $(this.viewPort).find("#view-materializedatasets").click(function () {
                    me.refreshViewMaterializeDatasets();
                });
            }
            if (this.displayInPopup) {
                // remove any existing popups
                $("." + this.popupDialogClass).remove();
                /*
                    when the popup is initialized, events will need to be targeted by using 'this.popup' instead of
                    the 'this.viewPort' as the popup dom elements will be inserted after
                 */
                this.popup = this.$el.find(".download-wrapper").dialog({
                    dialogClass: this.popupDialogClass,
                    autoOpen: false,
                    position: {
                        my: "left-70 top", at: "left-70 bottom", of: this.$el.find("button.popup-trigger")
                    },
                    clickOutside: true, // clicking outside the dialog will close it
                    clickOutsideTrigger: this.$el.find("button.popup-trigger"), // Element (id or class) that triggers the dialog opening
                });

                // Click Event for filter panel button
                this.$el.find("button.popup-trigger").click(function () {
                    if (me.popup.dialog("isOpen")) {
                        me.popup.dialog("close");
                    } else {
                        me.popup.dialog("open");
                    }
                });
            }

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricTotalView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_metric_total_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        selectionModel: null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            
            if (options.selectionModel) {
                this.selectionModel = options.selectionModel;
                this.selectionModel.on('change', function() {
                    me.render();
                });
            }

            this.model.on('change', function() {
                me.render();
            });
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        render: function() {
            var isMultiple = true;

            var jsonData = {
                "selAvailable" : true,
                "options" : [],
                "multiple" : isMultiple
            };
            
            // iterate through all model metrics
            var results = this.model.get("results");
            if (!results && (this.model.get("analyses"))) {
                results = this.model.get("analyses")[0].get("results");
            }
            
            if (results) {
                for (var idx = 0; idx < results.cols.length; idx++) {
                    var col = results.cols[idx];
                    // get the total for the metric
                    totalValue = results.rows[0].v[idx];
                    var selected = this.isSelected(col.id);

                    // add to the list
                    var option = {
                        "name" : col.name,
                        "value" : col.id,
                        "total" : {
                            "value" : totalValue,
                            "unit" : null
                        },
                        "selected" : selected
                    };
                    jsonData.options.push(option);
                }
            }


            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            return this;
        },
        
        isSelected : function(id) {
            var selected = false;
            var model = this.selectionModel;
            if (model) {
                var metrics = model.get("metrics");
                if (!metrics && (model.get("analyses"))) {
                    metrics = model.get("analyses")[0].get("metrics");
                }
                if (metrics) {
                    for (var j=0; j<metrics.length; j++) {
                        if (id === metrics[j].metricId) {
                            selected = true;
                        }
                    }
                }
            }
            return selected;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_metric_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : template,
        selectMetric : false,
        noDataMessage: "No Metrics have been chosen",

        initialize: function(options) {
            var me = this;
            this.status = squid_api.model.status;

            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                }
                if (options.selectMetric) {
                    this.selectMetric = options.selectMetric;
                }
                if (options.noDataMessage) {
                    this.noDataMessage = options.noDataMessage;
                }
            }

            // setup the models
            if (!this.config) {
                this.config = squid_api.model.config;
            }

            this.config.on("change:domain", function() {
                me.render();
            });
            this.config.on("change:chosenMetrics", function() {
                me.render();
            });

            this.renderBase();
        },

        events: {
            // Dimension Sorting
            "click li": function(item) {
                if (this.selectMetric) {
                    var metrics = this.$el.find(".chosen-metrics li");

                    for (i = 0; i < metrics.length; i++) {
                        $(metrics[i]).removeAttr("data-selected");
                        $(metrics[i]).removeClass("ui-selected");
                    }

                    $(item.currentTarget).addClass("ui-selected");
                    $(item.currentTarget).attr("data-selected", true);

                    var selectedItem = $(item.currentTarget).attr("data-content");

                    // Update
                    this.config.set({"selectedMetric" : selectedItem});
                }
            }
        },

        renderMetrics: function(metrics) {
            this.jsonData.chosenMetrics = [];
            for (var i = 0; i < metrics.length; i++) {
                // add to the list
                var option = {
                        "name" : metrics[i].get("name"),
                        "value" : metrics[i].get("oid"),
                        "selectMetric" : this.selectMetric,
                };
                this.jsonData.chosenMetrics.push(option);
            }
            if (this.jsonData.chosenMetrics.length > 0) {
                this.jsonData.noChosenMetrics = false;
            }
            var html = this.template(this.jsonData);
            this.$el.html(html);
        },

        renderBase: function() {
            this.jsonData = {"chosenMetrics" : [], "noChosenMetrics" : true, "noDataMessage" : this.noDataMessage};
            var html = this.template(this.jsonData);
            this.$el.html(html);
            if (this.afterRender) {
                this.afterRender.call(this);
            }
        },

        render: function() {
            var me = this;
            var domainOid = this.config.get("domain");
            var chosenMetrics = this.config.get("chosenMetrics");

            if (domainOid && (chosenMetrics)) {
                // prepare all promises
                var metricPromises = [];
                for (var cMetrics = 0; cMetrics < chosenMetrics.length; cMetrics++) {
                    var metric = new squid_api.model.MetricModel();
                    metric.set("id", {
                        "projectId" : this.config.get("project"),
                        "domainId" : domainOid,
                        "metricId" : chosenMetrics[cMetrics]
                    });
                    metricPromises.push(metric.fetch());
                }
                // render when all metrics have been fetched
                squid_api.getSelectedDomain().then(function(domain) {
                    domain.get("metrics").load().done( function(metrics) {
                        var metricModels = [];
                        for (var i=0; i<chosenMetrics.length; i++) {
                            var metric = metrics.findWhere({"oid" : chosenMetrics[i]});
                            if (metric) {
                                metricModels.push(metric);
                            }
                        }
                        me.renderMetrics(metricModels);
                    });
                });
            } else {
                this.renderMetrics([]);
            }

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.OrderByView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,
        format : null,
        removeOrderDirection: false,
        orderByDirectionDisplay: null,
        metricList: null,
        filters: null,

        initialize : function(options) {
            var me = this;
        
            if (options.config) {
            	this.config = options.config;
            } else {
            	this.config = squid_api.model.config;
            }
            if (options.removeOrderDirection) {
                this.removeOrderDirection = options.removeOrderDirection;
            }
            if (options.orderByDirectionDisplay) {
                this.orderByDirectionDisplay = options.orderByDirectionDisplay;
            }
            if (options.metricList) {
                this.metricList = options.metricList;
            }
            if (options.filters) {
            	this.filters = options.filters;
            } else {
            	this.filters = squid_api.model.filters;
            }
            if (options.status) {
            	this.status = options.status;
            } else {
            	this.status = squid_api.model.status;
            }
            
            this.config.on('change:chosenDimensions', this.render, this);
            this.config.on('change:chosenMetrics', this.render, this);
            this.config.on('change:orderBy', this.render, this);
            
            // listen for selection change as we use it to get dimensions
            this.filters.on("change:selection", function() {
                me.render();
            });
            
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_orderby_widget;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.1f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
        },
        
        events: {
        	"click .onoffswitch": function() {
                if (! this.disabled) {
                    var orderBy = this.config.get("orderBy");
                    var obj = {};
                    if (orderBy) {
                        if (orderBy[0]) {
                            if (orderBy[0].expression) {
                                obj.expression = {"value" : orderBy[0].expression.value};
                            }
                            if (orderBy[0].direction) {
                                if (orderBy[0].direction === "DESC") {
                                    obj.direction = "ASC";
                                } else {
                                    obj.direction = "DESC";
                                }
                            }
                        }
                        this.config.set({"orderBy" : [obj]});
                    }
                }
        		return false;
        	}
        },

        render : function(model, attribute, event) {
            var me = this;

            var filters = this.filters.get("selection");
            var chosenDimensions = this.config.get("chosenDimensions");
            var chosenMetrics = this.config.get("chosenMetrics");
            var orderBy = this.config.get("orderBy");
            var limit = this.config.get("limit");
            var autoSet = true;
            var count = 0;

            if (event) {
                if (event.unset) {
                    autoSet = false;
                }
            }

            var columns = [];
            if (filters) {
                // obtain chosenDimension metadata
                if (chosenDimensions) {
                    count = chosenDimensions.length;
                    for (var ix0=0; ix0<chosenDimensions.length; ix0++) {
                        if (filters) {
                            for (ix1=0; ix1<filters.facets.length; ix1++) {
                                if (chosenDimensions[ix0] === filters.facets[ix1].id) {
                                    columns.push({"label" : filters.facets[ix1].dimension.name, "value" : filters.facets[ix1].id});
                                }
                            }
                        }
                    }
                }

            // get selected domain in order to retieve domain metrics
            squid_api.getSelectedDomain().always(function(domain) {
                if (domain) {
                    var metrics = domain.get("metrics");
                    var metric;
                    var definition;

                    // auto set orderBy if one isn't set
                    if (! orderBy) {
                        if (chosenDimensions) {
                            if (chosenDimensions.length !== 0 && autoSet) {
                                for (var i=0; i<chosenDimensions.length; i++) {
                                    me.config.set("orderBy", [{"expression" : {"value" : chosenDimensions[i]}, "direction":"DESC"}]);
                                    break;
                                }
                            }
                        }
                        if (chosenMetrics) {
                            if (chosenMetrics.length !== 0 && ! orderBy) {
                                for (var ix=0; ix<chosenMetrics.length; ix++) {
                                    metric = metrics.findWhere({oid: chosenMetrics[ix]});
                                    if (metric && autoSet) {
                                        definition = metric.get("definition");
                                        me.config.set("orderBy", [{"expression" : {"value" : definition}, "direction":"DESC"}]);
                                        break;
                                    }
                                }
                            }
                        }
                    } else {
                        var foundExpression = false;
                        if (orderBy[0].expression) {
                            var expressionValue = orderBy[0].expression.value;
                            if (chosenDimensions) {
                                if (chosenDimensions.length !== 0) {
                                    for (var i1=0; i1<chosenDimensions.length; i1++) {
                                        if (chosenDimensions[i1] === expressionValue) {
                                            foundExpression = true;
                                        }
                                    }
                                }
                            }
                            if (chosenMetrics) {
                                if (chosenMetrics.length !== 0) {
                                    for (var i2=0; i2<chosenMetrics.length; i2++) {
                                        metric = metrics.findWhere({oid: chosenMetrics[i2]});
                                        if (metric) {
                                            definition = metric.get("definition");
                                            if (definition === expressionValue) {
                                                foundExpression = true;
                                            }
                                        }
                                    }
                                }
                            }
                            if (! foundExpression && orderBy.length < 2) {
                                // TODO: refactor into supporting multi orderBy
                                me.config.unset("orderBy");
                            }
                        }
                    }

                    // obtain chosenMetrics metadata
                    if (metrics && chosenMetrics) {
                        count = count + chosenMetrics.length;
                        for (var id=0; id<metrics.length; id++) {
                            var metricItem = metrics.at(id);
                            // Match with chosen
                            for (var match=0; match<chosenMetrics.length; match++) {
                                if (metricItem.get("oid") === chosenMetrics[match]) {
                                    var option = {"label" : metricItem.get("name"), "value" : metricItem.get("definition")};
                                    columns.push(option);
                                }
                            }
                        }
                    }

                    // view data
                    var jsonData = {
                        "disabled" : false,
                        "limit" : limit,
                        "orderByDirectionDisplay" : me.orderByDirectionDisplay,
                        "removeOrderDirection" : me.removeOrderDirection
                    };

                    if (orderBy) {
                        if (orderBy.length > 0) {
                            for (var ix1=0; ix1<columns.length; ix1++) {
                                if (orderBy[0].expression) {
                                    if (columns[ix1].value === orderBy[0].expression.value) {
                                        columns[ix1].selected = true;
                                    }
                                }
                            }
                            if (orderBy[0].direction === "ASC") {
                                jsonData.checked = true;
                            }
                        }
                    }

                    // set columns
                    jsonData.Columns = columns;

                    // check if widget needs disabling
                    if (columns.length === 0) {
                        jsonData.disabled = true;
                        me.disabled = true;
                    } else {
                        me.disabled = false;
                    }

                    // print html
                    var html = me.template(jsonData);
                    me.$el.html(html);

                    // instantiate widget
                    me.$el.find("select").multiselect({
                        onChange: function(model) {
                            if (model.val() !== "none") {
                                var obj = {"expression": {"value" : model.val()}, "direction" : "DESC"};
                                me.config.set({"orderBy" : [obj]});
                            } else {
                                me.config.unset("orderBy");
                            }
                        }
                    });

                    // Set Limit Value
                    me.$el.find(".sq-select").val(jsonData.limit);
                }
            });

        }

        return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ProjectSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_project_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        projects : null,
        onChangeHandler: null,
        projectManipulateRender: null,
        dropdownClass: null,
        projectAutomaticLogin: null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            
            if (options.onChangeHandler) {
                this.onChangeHandler = options.onChangeHandler;
            }
            if (options.projectManipulateRender) {
                this.projectManipulateRender = options.projectManipulateRender;
            }
            if (options.multiSelectView) {
                this.multiSelectView = options.multiSelectView;
            }
            if (options.projectAutomaticLogin) {
                this.projectAutomaticLogin = options.projectAutomaticLogin;
            }

            // init the projects
            if (options.projects) {
                this.projects = options.projects;
            } else {
                //init the projects
                this.projects = new squid_api.model.ProjectCollection();
            }
            this.projects.addParameter("deepread","1");
            this.projects.on("reset sync", this.render, this);
            squid_api.model.login.on('change:login', function(model) {
                if (model.get("login")) {
                    // fetch projects
                    me.projects.fetch({
                        success : function(model) {
                            console.log(model);
                        },
                        error : function(model) {
                            console.log(model);
                        }
                    });
                }
            });
      
            if (!this.model) {
                this.model = squid_api.model.config;
            }
            this.model.on("change:project", this.render, this);

            // if project edit element passed, render it's view
            if (this.projectManipulateRender) {
                this.model.on("change:project", this.editProjectViewRender, this);
                this.editProjectViewRender();
            }
        },

        events: {
            "change .sq-select": function(event) {
                if (this.onChangeHandler) {
                    this.onChangeHandler.call(this,event);
                } else {
                    // default behavior
                    var selectedOid = event.target.value || null;
                    this.model.set({
                        "project" : selectedOid,
                        "domain" : null
                    });
                }
            }
        },

        editProjectViewRender: function() {
            var me = this;

            if (this.projectEditView) {
                this.projectEditView.remove();
            }
            
            // get the project;
            var project = new squid_api.model.ProjectModel();
            project.id = {
                projectId : me.model.get("project")
            };
            project.fetch().then( function() {
                if (me.projectEditView) {
                    me.projectEditView.setModel(project);
                } else { 
                    me.projectEditView = new api.view.ModelManagementView({
                        el : $(me.projectManipulateRender),
                        model : project,
                        successHandler: function() {
                            if (me.projectAutomaticLogin) {
                                squid_api.model.config.set({
                                    "project" : this.get("id").projectId,
                                    "domain" : null
                                });
                            }
                        }
                    });
                }
            });

        },

        render: function() {
            if (this.projects) {
                // display
                 
                var project, jsonData = {"selAvailable" : true, "options" : [{"label" : "Select Project", "value" : "", "selected" : false}]};
    
                for (var i=0; i<this.projects.size(); i++) {
                    project = this.projects.at(i);
                    if (project) {
                        var selected = false;
                        if (project.get("oid") === this.model.get("project")) {
                            selected = true;
                        }
    
                        var displayed = true;
    
                        // do not display projects with no domains
                        if (!project.get("domains")) {
                            displayed = false;
                        }
    
                        if (displayed) {
                            var option = {"label" : project.get("name"), "value" : project.get("oid"), "selected" : selected};
                            jsonData.options.push(option);
                        }
                    }
                }
    
                var html = this.template(jsonData);
                this.$el.html(html);
                this.$el.show();
    
                // Initialize plugin
                if (this.multiSelectView) {
                    this.$el.find("select").multiselect();
                }
            }

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.SaveAsDomain = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template: null,
        renderTo: null,
        compression: true,
        displayInAccordion: false,
        viewPort: null,
        selectedFormatIndex: 0,
        templateData: null,
        displayScripting: true,
        displayCompression: true,
        materializeDatasetsView: false,
        downloadButtonLabel: "Create Your DataFrame",
        popupDialogClass: "squid-api-materialize-panel-popup",
        mdomainCollection: null,
        mprojectCollection: null,
        mdomainModal: null,
        mdomainButton: null,
        mprojectModal: null,
        mprojectButton: null,
        saveAsTableModal: null,
        saveAsDomainModal: null,
        projectName: null,
        schemaName: null,

        initialize: function (options) {
            var me = this;

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function () {
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    if (this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function () {
                    me.render();
                    me.enabled();
                });
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_saveasdomain_widget;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
                this.displayInAccordion = true;
                this.viewPort = this.renderTo;
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
                this.displayInPopup = true;
            }

            if (options.mprojectCollection) {
                this.mprojectCollection = options.mprojectCollection;
            }
            if (options.mprojectModal) {
                this.mprojectModal = options.mprojectModal;
            }
            if (options.mprojectButton) {
                this.mprojectButton = options.mprojectButton;
            }

            if (options.mdomainCollection) {
                this.mdomainCollection = options.mdomainCollection;
            }
            if (options.mdomainModal) {
                this.mdomainModal = options.mdomainModal;
            }
            if (options.mdomainButton) {
                this.mdomainButton = options.mdomainButton;
            }

            if (options.materializeDatasetsView) {
                this.materializeDatasetsView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.displayScripting === false) {
                this.displayScripting = false;
            }
            if (options.displayCompression === false) {
                this.displayCompression = false;
            }
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }

            this.saveAsTableModal = new squid_api.view.ModalView({
            });

            this.saveAsDomainModal = new squid_api.view.ModalView({
            });

            //var ddfCollection = new api.view.ProjectCollectionManagementWidget({
            //    onSelect: function() {
            //        ddfModal.close();
            //    }
            //});

            //var ddfModal = new api.view.ModalView({
            //    view : ddfCollection
            //});
            //
            //var ddfButton = new api.view.ProjectSelectorButton({
            //    el : '#destProject'
            //});
            //
            //ddfButton.$el.click(function() {
            //    ddfModal.render();
            //});

        },



        enabled: function () {
            var viewPort = this.viewPort;
            if (this.popup) {
                viewPort = this.popup;
            }
            if (this.model.get("enabled")) {
                this.$el.find("button").prop("disabled", false);
                viewPort.find("button#download").prop("disabled", false);
            } else {
                this.$el.find("button").prop("disabled", true);
                viewPort.find("button#download").prop("disabled", true);
            }
        },

        setModel: function (model) {
            this.model = model;
            this.initialize();
        },



        saveMaterializeDatasets: function () {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }


            // prepare materialize datasets download link
            var downloadBtnD = $(me.viewPort).find("#view-materializedatasets");
            downloadBtnD.addClass("disabled");

            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.InternalanalysisjobModel();
                downloadAnalysis.set(
                    {
                        "name": $(this.viewPort).find("#name").val(),
                        "options": {
                            "alink": true,
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId":  $(this.viewPort).find("#projectName").val(),
                            "destSchema":  $(this.viewPort).find("#schemaName").val()
                        }
                    }
                );
                downloadAnalysis.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },



        render: function () {
            var me = this;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            squid_api.getSelectedProject(true).then(function(project) {
                me.projectName = project.get("id")["projectId"];
                me.schemaName = project.get("dbSchemas")[0];
            });

            $(this.viewPort).html(me.template({
                "displayInAccordion": me.displayInAccordion,
                "downloadButtonLabel": me.downloadButtonLabel,
                "displayInPopup": me.displayInPopup,
                "materializeDatasetsView": me.materializeDatasetsView,
                "data-target": me.renderTo,
                "displayVirtualize": me.displayVirtualize,
                "virtualize": (me.virtualize),
                "origin": "https://api.squidsolutions.com",
                "customerId": squid_api.customerId,
                "clientId": squid_api.clientId,
                "redirectURI": "https://api.squidsolutions.com",
                "apiURL": squid_api.apiURL,
                "schemaName": this.schemaName,
                "projectName": this.projectName,
                "typeLabelPlural": "Save as Domain",
            }));

            $(this.viewPort).find(".save-close").click(function() {
                me.saveMaterializeDatasets();
            });

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.SaveAsTable = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template: null,
        renderTo: null,
        compression: true,
        displayInAccordion: false,
        viewPort: null,
        selectedFormatIndex: 0,
        templateData: null,
        displayScripting: true,
        displayCompression: true,
        materializeDatasetsView: false,
        popupDialogClass: "squid-api-saveastable-panel-popup",
        saveAsTableModal: null,
        saveAsDomainModal: null,
        projectName: null,
        schemaName: null,

        initialize: function (options) {
            var me = this;

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function () {
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    if (this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function () {
                    me.render();
                    me.enabled();
                });
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_saveastable_widget;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
                this.displayInAccordion = true;
                this.viewPort = this.renderTo;
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
                this.displayInPopup = true;
            }

            if (options.mprojectCollection) {
                this.mprojectCollection = options.mprojectCollection;
            }
            if (options.mprojectModal) {
                this.mprojectModal = options.mprojectModal;
            }
            if (options.mprojectButton) {
                this.mprojectButton = options.mprojectButton;
            }

            if (options.mdomainCollection) {
                this.mdomainCollection = options.mdomainCollection;
            }
            if (options.mdomainModal) {
                this.mdomainModal = options.mdomainModal;
            }
            if (options.mdomainButton) {
                this.mdomainButton = options.mdomainButton;
            }

            if (options.materializeDatasetsView) {
                this.materializeDatasetsView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.displayScripting === false) {
                this.displayScripting = false;
            }
            if (options.displayCompression === false) {
                this.displayCompression = false;
            }
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }

            this.ddfCollection = new squid_api.view.ProjectCollectionManagementWidget({
                onSelect: function() {
                    this.ddfModal.close();
                    $(this.viewPort).show();
                }
            });

            this.ddfModal = new squid_api.view.ModalView({
                view : this.ddfCollection
            });
        },



        enabled: function () {
            var viewPort = this.viewPort;
            if (this.popup) {
                viewPort = this.popup;
            }
            if (this.model.get("enabled")) {
                this.$el.find("button").prop("disabled", false);
                viewPort.find("button#download").prop("disabled", false);
            } else {
                this.$el.find("button").prop("disabled", true);
                viewPort.find("button#download").prop("disabled", true);
            }
        },

        setModel: function (model) {
            this.model = model;
            this.initialize();
        },



        saveMaterializeDatasets: function () {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }


            // prepare materialize datasets download link
            var downloadBtnD = $(me.viewPort).find("#view-materializedatasets");
            downloadBtnD.addClass("disabled");

            if (analysis.get("id").projectId) {
                var newdomain = new squid_api.model.InternalanalysisjobModel();
                newdomain.set(
                    {
                        "name": $(this.viewPort).find("#name").val(),
                        "options": {
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId":  $(this.viewPort).find("#projectName").val(),
                            "destSchema":  $(this.viewPort).find("#schemaName").val()
                        }
                    }
                );
                newdomain.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },



        render: function () {
            var me = this;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            squid_api.getSelectedProject(true).then(function(project) {
                me.projectName = project.get("id")["projectId"];
                me.schemaName = project.get("dbSchemas")[0];
            });

            $(this.viewPort).html(me.template({
                "displayInAccordion": me.displayInAccordion,
                "downloadButtonLabel": me.downloadButtonLabel,
                "displayInPopup": me.displayInPopup,
                "materializeDatasetsView": me.materializeDatasetsView,
                "data-target": me.renderTo,
                "origin": "https://api.squidsolutions.com",
                "customerId": squid_api.customerId,
                "clientId": squid_api.clientId,
                "redirectURI": "https://api.squidsolutions.com",
                "apiURL": squid_api.apiURL,
                "schemaName": this.schemaName,
                "projectName": this.projectName,
                "typeLabelPlural": "Save as Table",
            }));

            $(this.viewPort).find(".save-close").click(function() {
                me.saveMaterializeDatasets();
            });




            this.ddfButton = new squid_api.view.ProjectSelectorButton({
                el : '#destProject'
            });
            //
            this.ddfButton.$el.click(function() {
                //$(this.viewPort).parents.hide();
                //me.view = me.ddfModal;
                me.ddfModal.render();
            });
            //this.ddfButton.render();

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.SaveOnSpark = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template: null,
        renderTo: null,
        compression: true,
        displayInAccordion: false,
        viewPort: null,
        selectedFormatIndex: 0,
        templateData: null,
        displayScripting: true,
        displayCompression: true,
        materializeDatasetsView: false,
        popupDialogClass: "squid-api-saveonspark-panel-popup",
        saveAsTableModal: null,
        saveAsDomainModal: null,
        projectName: null,
        schemaName: null,

        initialize: function (options) {
            var me = this;

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function () {
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    if (this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function () {
                    me.render();
                    me.enabled();
                });
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_saveonspark_widget;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
                this.displayInAccordion = true;
                this.viewPort = this.renderTo;
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
                this.displayInPopup = true;
            }

            if (options.mprojectCollection) {
                this.mprojectCollection = options.mprojectCollection;
            }
            if (options.mprojectModal) {
                this.mprojectModal = options.mprojectModal;
            }
            if (options.mprojectButton) {
                this.mprojectButton = options.mprojectButton;
            }

            if (options.mdomainCollection) {
                this.mdomainCollection = options.mdomainCollection;
            }
            if (options.mdomainModal) {
                this.mdomainModal = options.mdomainModal;
            }
            if (options.mdomainButton) {
                this.mdomainButton = options.mdomainButton;
            }

            if (options.materializeDatasetsView) {
                this.materializeDatasetsView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.displayScripting === false) {
                this.displayScripting = false;
            }
            if (options.displayCompression === false) {
                this.displayCompression = false;
            }
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }

        },



        enabled: function () {
            var viewPort = this.viewPort;
            if (this.popup) {
                viewPort = this.popup;
            }
            if (this.model.get("enabled")) {
                this.$el.find("button").prop("disabled", false);
                viewPort.find("button#download").prop("disabled", false);
            } else {
                this.$el.find("button").prop("disabled", true);
                viewPort.find("button#download").prop("disabled", true);
            }
        },

        setModel: function (model) {
            this.model = model;
            this.initialize();
        },



        saveMaterializeDatasets: function () {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }


            // prepare materialize datasets download link
            var downloadBtnD = $(me.viewPort).find("#view-materializedatasets");
            downloadBtnD.addClass("disabled");

            if (analysis.get("id").projectId) {
                var newdomain = new squid_api.model.InternalanalysisjobModel();
                newdomain.set(
                    {
                        "name": $(this.viewPort).find("#name").val(),
                        "options": {
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId":  "", //save to spark
                            "destSchema":  $(this.viewPort).find("#schemaName").val()
                        }
                    }
                );
                newdomain.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },



        render: function () {
            var me = this;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            squid_api.getSelectedProject(true).then(function(project) {
                me.projectName = project.get("id")["projectId"];
                me.schemaName = project.get("dbSchemas")[0];
            });

            $(this.viewPort).html(me.template({
                "displayInAccordion": me.displayInAccordion,
                "downloadButtonLabel": me.downloadButtonLabel,
                "displayInPopup": me.displayInPopup,
                "materializeDatasetsView": me.materializeDatasetsView,
                "data-target": me.renderTo,
                "origin": "https://api.squidsolutions.com",
                "customerId": squid_api.customerId,
                "clientId": squid_api.clientId,
                "redirectURI": "https://api.squidsolutions.com",
                "apiURL": squid_api.apiURL,
                "schemaName": this.schemaName,
                "projectName": this.projectName,
                "typeLabelPlural": "Save on Spark",
            }));

            $(this.viewPort).find(".save-close").click(function() {
                me.saveMaterializeDatasets();
            });

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.SimpleDataExport = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,
        exportTemplate : null,
        downloadStatus : 0,
        currentJobId : null,
        analysis : null,
        
        initialize : function(options) {
            if (this.model) {
                this.analysis = this.model.get("analysis");
                this.listenTo(this.analysis, 'change', this.render);
                this.listenTo(this.model, 'change:templateData', this.render);
                this.listenTo(this.model, "change:enabled", this.setDownloadBtnState);
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            }
            
            this.exportTemplate = app.template[options.exportTemplate];
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setDownloadBtnState : function() {
            // Loop through passed model to see if any false values exist
            var disabled = this.model.get("enabled") === false;
            var downloadBtn = this.$el.find("#download");
            if (disabled) {
                downloadBtn.addClass("disabled");
            } else {
                downloadBtn.removeClass("disabled");
            }
        },
        
        render : function() {
            
            var me = this;
            var analysis = this.analysis;
                         
             // prepare download link
             this.downloadStatus = 1;
             var downloadBtn = this.$el.find("#download");
             downloadBtn.addClass("disabled");
             
             if (analysis.get("id").projectId) {
                 var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                 downloadAnalysis.set(analysis.attributes);
                 downloadAnalysis.set({
                     "id": {
                         "projectId": analysis.get("id").projectId,
                         "analysisJobId": null
                     },
                     "autoRun": false});
                 squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                 .done(function() {
                     me.downloadStatus = 2;
                     me.currentJobId = downloadAnalysis.get("id");
                     // create download link
                     var analysisJobResults = new squid_api.model.ProjectAnalysisJobRender();
                     analysisJobResults.addParameter("format",me.format);
                     if (me.compression) {
                         analysisJobResults.addParameter("compression","gzip");
                     }
     
                     // build the template
                     var velocityTemplate = me.exportTemplate(me.model.get("templateData"));
                     analysisJobResults.setParameter("template", base64.encode(velocityTemplate));
                     analysisJobResults.setParameter("type","text/html");
                     analysisJobResults.setParameter("timeout",null);
                             
                     analysisJobResults.set({
                         "id": me.currentJobId,
                         "oid": downloadAnalysis.get("oid")
                     });
                     console.log("download url : "+analysisJobResults.url());
                     var downloadBtn = me.$el.find("#download");
                     downloadBtn.attr("href",analysisJobResults.url());
                     me.setDownloadBtnState();

                 })
                 .fail(function() {
                     console.error("createAnalysisJob failed");
                     me.setDownloadBtnState();
                 });
            }

            return this;
        }
    });

    return View;
}));

(function(root, factory) {
    root.squid_api.controller.SingleDimensionAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,

        customEvents: function() {
            // to be overridden
        },

        refreshAnalysis : function(silent) {
            var changed = false;
            var a = this.analysis;
            var config = this.config;
            if (silent !== false) {
                silent = true;
            }

            a.set({
                "id" : {
                    "projectId" : config.get("project"),
                    "analysisJobId" : a.get("id").analysisJobId
                }
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "domains" : [ {
                    "projectId" : config.get("project"),
                    "domainId" : config.get("domain")
                } ]
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            var selection = this.config.get("selection");
            if (selection) {
                var facetFound = false;
                for (i=0; i<selection.facets.length; i++) {
                    var facet = selection.facets[i];
                    var chosenDimensions = config.get("chosenDimensions");
                    var id = facet.id;
                    if (chosenDimensions) {
                        if (config.get("chosenDimensions").length > 0) {
                            this.setDimension(a, chosenDimensions[0]);
                            break;
                        } else {
                            this.setDimension(a, facet.id);
                            break;
                        }
                    } else {
                        this.setDimension(a, facet.id);
                        break;
                    }
                }
            }
            changed = changed || a.hasChanged();
            a.setMetrics(config.get("chosenMetrics"), silent);
            changed = changed || a.hasChanged();
            a.setSelection(config.get("selection"), silent);
            changed = changed || a.hasChanged();
            a.set({
                "limit" : config.get("limit")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "rollups" : config.get("rollups")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "orderBy" : config.get("orderBy")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();

            if (changed === true) {
                this.onChangeHandler(this.analysis);
            }
        },

        setDimension: function(a, id) {
            a.set("facets", [{value: id}], {silent : true});
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.TimeSeriesView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_timeseries_widget);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template : null,
        limit : 10000,
        format : null,
        d3Formatter : null,
        startDate: null,
        endDate: null,
        colorPalette: null,
        interpolationRange: null,
        yearSwitcherView: null,
        multiSeries: null,
        height: 400,
        staleMessage : "Click refresh to update",
        renderTo: ".squid-api-data-widgets-timeseries-widget #widget",
        renderLegend: ".squid-api-data-widgets-timeseries-widget #legend",
        reRunMessage: "Please manually refresh your analysis",
        timeUnitSelector: null,
        legendState: {},

        initialize : function(options) {
            this.config = squid_api.model.config;

            if (options) {
                if (options.limit) {
                    this.limit = options.limit;
                }
                if (options.colorPalette) {
                    this.colorPalette = options.colorPalette;
                } else {
                    this.colorPalette = d3.scale.category10().range();
                }
                if (options.timeUnits) {
                    this.timeUnits = options.timeUnits;
                } else {
                    this.timeUnits = [{
                        id: "TO_DATE",
                        name: "Daily"
                    },
                    {
                        id: "WEEKLY",
                        name: "Weekly"
                    }, {
                        id: "MONTHLY",
                        name: "Monthly"
                    }, {
                        id: "YEARLY",
                        name: "Yearly"
                    }];
                }
                if (options.interpolationRange) {
                    this.interpolationRange = options.interpolationRange;
                }
                if (options.yearSwitcherView) {
                    this.yearSwitcherView = options.yearSwitcherView;
                }
                if (options.timeUnitSelector) {
                    this.timeUnitSelector = options.timeUnitSelector;
                }
                if (options.yearAnalysis) {
                    this.yearAnalysis = options.yearAnalysis;
                }
                if (options.multiSeries) {
                    this.multiSeries = options.multiSeries;
                }
                if (options.staleMessage) {
                    this.staleMessage = options.staleMessage;
                }
                if (options.height) {
                    this.height = options.height;
                }
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = squid_api.template.squid_api_timeseries_widget;
                }
                if (options.reRunMessage) {
                    this.reRunMessage = options.reRunMessage;
                }
            }
            if (options.configuration) {
                this.configuration = options.configuration;
            } else {
                this.configuration = {
                    interpolate: "basic",
                    right: 80,
                    height: this.height,
                    target: this.renderTo,
                    x_accessor: 'date',
                    area: false,
                    y_accessor: 'value',
                    animate_on_load: false,
                    legend_target: this.renderLegend,
                    colors: this.colorPalette,
                };
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.1f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
            if (this.model) {
                this.listenTo(this.model, 'change:status', this.render);
                this.listenTo(this.model, 'change:disabled', this.toggleDisplay);
                this.listenTo(this.model, 'change:error', this.render);
                this.listenTo(this.config, 'change:configDisplay', this.updateHeight);
                this.listenTo(this.config, 'change:timeUnit', this.updateTimeUnitSelector);
            }

            // Resize
            $(window).on("resize", _.bind(this.resize(),this));
        },

        toggleDisplay: function() {
            if (this.model.get("disabled") || this.config.get("currentAnalysis") !== "timeAnalysis") {
                this.hide();
            } else {
                this.show();
            }
        },

        resize : function() {
            var resizing = true;
            return function() {
                if (this.resizing) {
                    window.clearTimeout(resizing);
                }
                this.resizing = window.setTimeout(_.bind(this.updateWidth,this), 100);
            };
        },

        events: {
            "change #time-unit-selector select": function(event) {
                var unit = $(event.currentTarget).val();
                this.config.set("timeUnit", unit);
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        /**
         * see : http://stackoverflow.com/questions/10966440/recreating-a-removed-view-in-backbone-js
         */
        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            $(window).off("resize");
            return this;
        },

        sortDates : function(rows) {
            rows.sort(function(a,b){
                var d1 = new Date(a.v[0]).getTime();
                var d2 = new Date(b.v[0]).getTime();
                return d1 > d2 ? 1 : -1;
            });
            return rows;
        },

        getData: function() {
            var data, analysis;

            // Support Mutli / Single Analysis Jobs
            if (this.model.get("analyses")) {
                if (this.YearOverYear) {
                    analysis = this.model.get("analyses")[1];
                } else {
                    analysis = this.model.get("analyses")[0];
                }
            } else {
                analysis = this.model;
            }

            data = analysis.toJSON();
            data.done = this.model.isDone();

            return data;
        },

        updateHeight: function() {
            var configDisplay = this.config.get("configDisplay");
            if (configDisplay) {
                if (! configDisplay.visible) {
                    this.configuration.height+=configDisplay.originalHeight;
                } else {
                    this.configuration.height = this.height;
                }
                MG.data_graphic(this.configuration);
            }
        },

        updateWidth: function() {
            this.configuration.width = $(this.renderTo).width();
            MG.data_graphic(this.configuration);
        },

        standardizeData: function(currentDateIndex) {
            // standardize data
            for (i=0; i<this.results.rows.length; i++) {
                // store date
                if (! currentDateIndex) {
                    var v = [this.results.rows[i].v[0]];
                    var dim = "";
                    var metricVal;
                    for (ix=1; ix<this.results.rows[i].v.length; ix++) {
                        if (typeof(this.results.rows[i].v[ix]) === "string") {
                            if (dim.length === 0) {
                                dim += this.results.rows[i].v[ix];
                            } else {
                                dim += " / " + this.results.rows[i].v[ix];
                            }
                        } else if (typeof(this.results.rows[i].v[ix]) === "number") {
                            metricVal = this.results.rows[i].v[ix];
                        }
                    }
                    v.push(dim);
                    v.push(metricVal);
                    this.results.rows[i].v = v;
                } else {
                    // remove currentDateRow
                    this.results.rows[i].v.splice(currentDateIndex, 1);
                }
            }
            if (currentDateIndex) {
                this.results.cols.splice(currentDateIndex, 1);
            }
        },

        renderGraphic: function(metrics) {
            this.$el.find(".sq-loading").hide();
            this.$el.find("#re-run").hide();

            // for manipulation time
            var start = new Date().getTime();

            // data for timeseries
            var legend = [];
            var dataset = [];
            var nVariate = false;
            var currentDateIndex = null;

            // sort dates
            this.results.rows = this.sortDates(this.results.rows);

            // see if multiple dimensions exist
            for (var col=1; col<this.results.cols.length; col++) {
                if (this.results.cols[col].role == "DOMAIN") {
                    nVariate = true;
                    var selection = this.config.get("selection");
                    if (selection) {
                        var facets = selection.facets;
                        for (var f=0; f<facets.length; f++) {
                            if (facets[f].id === this.results.cols[col].definition) {
                                nVariate = false;
                                this.standardizeData(col);
                            }
                        }
                    }
                }
            }

            if (nVariate) {
                // make sure we only have three columns
                this.standardizeData();
            }

            // get data
            for (i=1; i<this.results.cols.length; i++) {
                if (_.contains(metrics, this.results.cols[i].id) || ! metrics) {
                    var metaData = [];
                    var hashMap = {}

                    if (nVariate) {
                        // obtain legend names from results
                        for (ix1=0; ix1<this.results.rows.length; ix1++) {
                            if ($.inArray(this.results.rows[ix1].v[1], legend) < 0) {
                                // store unique legend items
                                legend.push(this.results.rows[ix1].v[1]);
                            }
                            // create hashMap
                            var i1 = this.results.rows[ix1].v[0];
                            var i2 = this.results.rows[ix1].v[1];
                            var i3 = this.results.rows[ix1].v[2]
                            if (hashMap[i2]) {
                                hashMap[i2][i1] = i3;
                            } else {
                                hashMap[i2] = {};
                                hashMap[i2][i1] = i3;
                            }
                        }
                    } else {
                        // obtain legend names from columns
                        legend.push(this.results.cols[i].name);
                    }
                }
            }

            var arr = [];
            if (nVariate) {
                for (var result in hashMap) {
                    arr = [];
                    for (date in hashMap[result]) {
                        var obj1 = {
                            "date" : date,
                            "value": hashMap[result][date]
                        };
                        arr.push(obj1);
                    }
                    arr = MG.convert.date(arr, 'date');
                    dataset.push(arr);
                }

            } else {
                for (ix=0; ix<this.results.rows.length; ix++) {
                    var obj = {
                        "date" : this.results.rows[ix].v[0],
                        "value" : this.results.rows[ix].v[1]
                    };
                    arr.push(obj);
                }
                arr = MG.convert.date(arr, 'date');
                dataset.push(arr);
            }

            // set width
            this.configuration.width = $(this.renderTo).width();

            // set legend & data
            if (legend.length === 0) {
                this.configuration.chart_type = 'missing-data';
            } else {
                delete this.configuration.chart_type;
                this.configuration.legend = legend;
                this.configuration.data = dataset;
            }

            // empty timeseries div
            $(this.renderTo).empty();

            // reinitialize timeseries
            MG.data_graphic(this.configuration);

            // manipulation time
            console.log("timeseries manipulation time: " + (new Date().getTime() - start) + " ms");
        },

        hide: function() {
            this.$el.hide();
        },

        show: function() {
            this.$el.show();
        },

        updateTimeUnitSelector: function() {
            var timeUnit = this.config.get("timeUnit");
            if (timeUnit) {
                this.$el.find("#time-unit-selector select").val(timeUnit);
            }
            this.$el.find("#time-unit-selector select").multiselect();
        },

        renderTemplate: function(done) {
            this.$el.html(this.template({
                reRunMessage: this.reRunMessage,
                timeUnitSelector: this.timeUnitSelector,
                timeUnits: this.timeUnits,
                done: done
            }));
            if (this.timeUnitSelector) {
                this.updateTimeUnitSelector();
            }
        },

        render : function() {
            var status = this.model.get("status");
            var me = this;
            this.YearOverYear = this.config.get("YearOverYear");
            this.renderTemplate(false);

            if (status === "PENDING") {
                this.$el.html(this.template({"staleMessage" : this.staleMessage}));
                this.$el.find(".sq-loading").hide();
                this.$el.find("#stale").show();
            }
            if (status === "RUNNING") {
                this.$el.find(".sq-loading").show();
            }
            if (status === "DONE") {
                this.renderTemplate(true);
                // additional timeserie analysis views
                if (this.yearSwitcherView){
                    this.renderAdditionalView(this.yearSwitcherView, this.$el.find("#yearswitcher"));
                }

                this.$el.find("#stale").hide();
                this.$el.find(".sq-loading").hide();

                var data = this.getData();
                this.results = data.results;

                // render metric selector view
                var resultMetrics = [];
                if (this.results) {
                    for (i=0; i<this.results.cols.length; i++) {
                        resultMetrics.push(this.results.cols[i].id);
                    }
                }

                if (data.done && this.results && ! this.model.get("error")) {
                    this.renderGraphic();
                    this.renderAdditionalView(new squid_api.view.MetricSelectorView({
                        filterBy : resultMetrics,
                        defaultButtonText: true,
                        customView: true,
                        afterRender: function() {
                            this.$el.find("select").multiselect();
                        },
                        onChangeHandler: function() {
                            var metrics = this.$el.find("select").val();
                            if (! metrics) {
                                metrics = [];
                            }
                            me.renderGraphic(metrics);
                        }
                    }), this.$el.find("#metricselector"));
                } else {
                    if (this.model.get("error")) {
                        if (this.model.get("error").enableRerun) {
                            this.$el.find("#re-run").show();
                        } else {
                            this.$el.find("#error").html("<div id='error'>" + this.model.get("error").message + "</div>");
                        }
                    }
                }
            }
        },

        renderAdditionalView: function(view, element) {
            view.setElement(element);
            view.renderBase();
            view.render();
        }
    });

    return View;
}));
