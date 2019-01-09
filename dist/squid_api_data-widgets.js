this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_barchart_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " display: none; ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"bar_chart\" class=\"squid-api-data-widgets-bar-chart\">\n    <div id=\"re-run\" style=\""
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isInCache : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <div class=\"reactiveMessage\">\n            <span>\n                <i class=\"fa fa-refresh\"></i><br>\n                Please manually refresh your analysis\n            </span>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_basic_displaytype_selector"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    	<li data-content=\""
    + alias4(((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"view","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + " fa-2x\"></i></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"squid-api-data-widgets-displaytype-selector\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["squid_api"]["template"]["squid_api_datatable_widget"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='sq-loading' style='display: none; position:absolute; width:100%; top:40%; z-index: 1;'>\r\n	<div class=\"spinner\">\r\n	<div class=\"rect5\"></div>\r\n	<div class=\"rect4\"></div>\r\n	<div class=\"rect3\"></div>\r\n	<div class=\"rect2\"></div>\r\n	<div class=\"rect1\"></div>\r\n	<div class=\"rect2\"></div>\r\n	<div class=\"rect3\"></div>\r\n	<div class=\"rect4\"></div>\r\n	<div class=\"rect5\"></div>\r\n	</div>\r\n</div>\r\n<div id=\"squid-api-data-widgets-data-table\">\r\n	<table class=\"sq-table\">\r\n		<thead>\r\n			<tr></tr>\r\n		</thead>\r\n		<tbody></tbody>\r\n	</table>\r\n	<div id=\"error\"></div>\r\n	<div id=\"stale\">\r\n		<div class=\"reactiveMessage\"><span><i class=\"fa fa-table\"></i><br>\r\n			"
    + alias4(((helper = (helper = helpers.staleMessage || (depth0 != null ? depth0.staleMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staleMessage","hash":{},"data":data}) : helper)))
    + "\r\n		</span></div>\r\n	</div>\r\n	<div id=\"re-run\" style=\"display: none;\">\r\n		<div class=\"reactiveMessage\"><span><i class=\"fa fa-refresh\"></i><br>\r\n        	"
    + alias4(((helper = (helper = helpers.reRunMessage || (depth0 != null ? depth0.reRunMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reRunMessage","hash":{},"data":data}) : helper)))
    + "\r\n		</span></div>\r\n		<span>\r\n	</div>\r\n	<div class=\"footer\">\r\n		<blockquote id=\"total\" style=\"display: none;\">\r\n			<footer id=\"total-msg\"></footer>\r\n		</blockquote>\r\n		<blockquote id=\"no-data\" style=\"display: none;\">\r\n			<footer data-i18n=\"noDataMessage\">No data found</footer>\r\n		</blockquote>\r\n		<div id=\"pagination\"></div>\r\n	</div>\r\n</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_dimension_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"information\">"
    + container.escapeExpression(((helper = (helper = helpers.noDataMessage || (depth0 != null ? depth0.noDataMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"noDataMessage","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"sortable\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.chosenDimensions : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li class=\"item\" data-content=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\"><i class=\"fa fa-ellipsis-v\"></i>"
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-data-widgets-dimension-widget\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noChosenDimensions : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_displaytype_selector_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    	<li data-content=\""
    + alias4(((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"view","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + " fa-2x\"></i></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"squid-api-data-widgets-displaytype-selector\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_domain_selector_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <select class=\"sq-select form-control\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\r\n            </option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "selected";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <!-- just display filter name -->\r\n    <label>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <span>-</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-data-widgets-domain-selector\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selAvailable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_export_scheduler_index_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, alias6=container.lambda, buffer = 
  "                <tr class=\"job-item\" data-attr="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n                    <td><a href=\"javascript:void(0);\" class=\"bslink\" data-toggle=\"tooltip\" data-placement=\"right\" title=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-clipboard-text=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.reportName || (depth0 != null ? depth0.reportName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reportName","hash":{},"data":data}) : helper)))
    + "</a><div class=\"hidden\">"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "</div></td>\n                    <td>\n";
  stack1 = ((helper = (helper = helpers.reportSelection || (depth0 != null ? depth0.reportSelection : depth0)) != null ? helper : alias2),(options={"name":"reportSelection","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.reportSelection) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </td>\n                    <td>Status: "
    + alias4(alias6(((stack1 = (depth0 != null ? depth0.status : depth0)) != null ? stack1.type : stack1), depth0))
    + "<br>Format: "
    + alias4(alias6(((stack1 = (depth0 != null ? depth0.report : depth0)) != null ? stack1.format : stack1), depth0))
    + "<br>Usage period: "
    + alias4(alias6(((stack1 = ((stack1 = (depth0 != null ? depth0.report : depth0)) != null ? stack1.period : stack1)) != null ? stack1.length : stack1), depth0))
    + "<br>Frequency: Every "
    + alias4(alias6(((stack1 = (depth0 != null ? depth0.scheduling : depth0)) != null ? stack1.frequency : stack1), depth0))
    + "<br>Next Delivery: "
    + alias4(((helper = (helper = helpers.nextExecutionDate || (depth0 != null ? depth0.nextExecutionDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextExecutionDate","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>\n";
  stack1 = ((helper = (helper = helpers.emails || (depth0 != null ? depth0.emails : depth0)) != null ? helper : alias2),(options={"name":"emails","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.emails) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </td>\n                    <td><button class=\"btn btn-secondary run-job\"><i class=\"fa fa-play\"></i></button></td>\n                    <td><button class=\"btn btn-secondary edit-job\"><i class=\"fa fa-pencil-square-o\"></i></button></td>\n                    <td><button class=\"btn btn-secondary delete-job\"><i class=\"fa fa-trash-o\"></i></button></td>\n                </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    	"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "<br>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-export-scheduler-index-view table-responsive\">\n    <button class=\"btn btn-default create-job\">New Schedule</button>\n    <table class=\"table table-bordered table-striped table-hover\">\n        <thead>\n            <tr>\n                <th class=\"col-xs-1\">Report</th>\n                <th class=\"col-xs-3\">Report Settings</th>\n                <th class=\"col-xs-3\">Schedule Settings</th>\n                <th class=\"col-xs-2\">Delivered to</th>\n                <th class=\"col-xs-1\">Run Now</th>\n                <th class=\"col-xs-1\">Edit</th>\n                <th class=\"col-xs-1\">Delete</th>\n            </tr>\n        </thead>\n        <tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.jobs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n    </table>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_export_scheduler_widget"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"squid-api-export-scheduler-widget\">\r\n	<button class=\"btn btn-default\">My Schedule <i class=\"fa fa-clock-o\"></i></button>\r\n</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_export_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"panel panel-default filter-panel\">\r\n			<div class=\"panel-heading\">\r\n				<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n				data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-hidden=\"true\" aria-expanded=\"false\">\r\n					<i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n				</button>\r\n				<h4 class=\"panel-title\" id=\"myModalLabel\">Export</h4>\r\n			</div>\r\n			<div class=\"panel-body\">\r\n				<button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-expanded=\"false\"></button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<span class=\"type\">\r\n				<input type=\"radio\" name=\"format\" value=\""
    + alias4(((helper = (helper = helpers.format || (depth0 != null ? depth0.format : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"format","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "> <span class=\"type-name\">"
    + alias4(((helper = (helper = helpers.format || (depth0 != null ? depth0.format : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"format","hash":{},"data":data}) : helper)))
    + "</span>\r\n			</span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div style=\"display: inline-block;\">\r\n				<span class=\"type\">\r\n					<label>Compression: </label> <input type=\"checkbox\" name=\"compression\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.compression : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/> <span class=\"type-name\">gzip</span>\r\n				</span>\r\n			</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "		<div id=\"metricSelector\">\r\n		</div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "		<div id=\"dimensionSelector\">\r\n		</div>\r\n		<div id=\"metricSelector\">\r\n		</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "		<div>\r\n			<a id=\"view-sql\" class=\"btn btn-default\" target=\"_blank\">View SQL</a>\r\n		</div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div id=\"curl-view\">\r\n            <br><hr>\r\n			Need to automate exports? Use the <a id=\"curlbtn\">shell commands</a>.\r\n			<div id=\"curl\">\r\n				<p>Sample code to download the analysis results using curl shell command.</p>\r\n				<b>1 - get an authentication token</b>\r\n				<p>replace the 'login' and 'password' fields in the following snippet</p>\r\n				<pre class=\"curl\">curl '"
    + alias4(((helper = (helper = helpers.apiURL || (depth0 != null ? depth0.apiURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apiURL","hash":{},"data":data}) : helper)))
    + "/auth-token' -H 'Origin: "
    + alias4(((helper = (helper = helpers.origin || (depth0 != null ? depth0.origin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"origin","hash":{},"data":data}) : helper)))
    + "' -H 'Accept-Encoding: gzip,deflate' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: */*' -H 'Cache-Control: no-cache' --data 'customerId="
    + alias4(((helper = (helper = helpers.customerId || (depth0 != null ? depth0.customerId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customerId","hash":{},"data":data}) : helper)))
    + "&client_id="
    + alias4(((helper = (helper = helpers.clientId || (depth0 != null ? depth0.clientId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clientId","hash":{},"data":data}) : helper)))
    + "&redirect_uri="
    + alias4(((helper = (helper = helpers.redirectURI || (depth0 != null ? depth0.redirectURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"redirectURI","hash":{},"data":data}) : helper)))
    + "&login=<b>[login]</b>&password=<b>[password]</b>'</pre>\r\n				<b>2 - download the export</b>\r\n				<p>replace the 'access_token' field in the following snippet by the value of the 'tokenId' field returned by the previous script</p>\r\n				<pre class=\"curl\">curl '"
    + ((stack1 = ((helper = (helper = helpers.curl || (depth0 != null ? depth0.curl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"curl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "' -H 'Origin: "
    + alias4(((helper = (helper = helpers.origin || (depth0 != null ? depth0.origin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"origin","hash":{},"data":data}) : helper)))
    + "' -H 'Accept-Encoding: gzip,deflate' -H 'Content-Type: application/json' -H 'Accept: application/json, text/javascript, */*; q=0.01' --data-binary $'"
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data}) : helper)))
    + "' --compressed -o "
    + alias4(((helper = (helper = helpers.curlFileName || (depth0 != null ? depth0.curlFileName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"curlFileName","hash":{},"data":data}) : helper)))
    + "</pre>\r\n				<b>3 - view the export</b>\r\n				<p>your analysis results should now be downloaded as</p>\r\n				<pre class=\"curl\">ls "
    + alias4(((helper = (helper = helpers.curlFileName || (depth0 != null ? depth0.curlFileName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"curlFileName","hash":{},"data":data}) : helper)))
    + "</pre>\r\n			</div>\r\n		</div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "			</div>\r\n		</div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<button type=\"button\" class=\"btn popup-trigger form-control\">"
    + container.escapeExpression(((helper = (helper = helpers.buttonLabel || (depth0 != null ? depth0.buttonLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonLabel","hash":{},"data":data}) : helper)))
    + " <i class=\"fa fa-download\"></i></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"squid-api-data-widgets-export-widget\">\r\n	<div class=\"download-wrapper\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"download-formats\">\r\n			<label>Format: </label>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.formats : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayCompression : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\r\n		<div>&nbsp;</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.metricSelectorEnabled : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.analysisConfigurationEnabled : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div>\r\n			<button id=\"download\" class=\"btn btn-small btn-sm btn-success\" target=\"_blank\">"
    + container.escapeExpression(((helper = (helper = helpers.downloadButtonLabel || (depth0 != null ? depth0.downloadButtonLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"downloadButtonLabel","hash":{},"data":data}) : helper)))
    + "</button>\r\n		</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sqlView : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<form id=\"download-form\" style=\"visibility: hidden;\"></form>\r\n	</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInPopup : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_kpi_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class='sq-kpi squid-api-data-widgets-kpi-widget'>\r\n		<div class=\"name\">\r\n	        "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n	    </div>\r\n		<div>\r\n			<span class=\"value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"unit\">"
    + alias4(((helper = (helper = helpers.unit || (depth0 != null ? depth0.unit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unit","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.compareToValue : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div>\r\n			<span class=\"compareToValue\">"
    + alias4(((helper = (helper = helpers.compareToValue || (depth0 != null ? depth0.compareToValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"compareToValue","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"unit\">"
    + alias4(((helper = (helper = helpers.unit || (depth0 != null ? depth0.unit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unit","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.done : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "  		<span data-i18n=\"noDataMessage\">No Data</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "  		<span data-i18n=\"computing\">Computing</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["squid_api"]["template"]["squid_api_materialize_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"panel panel-default filter-panel\">\r\n            <div class=\"panel-heading\">\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                        data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                    <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                </button>\r\n                <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n            </div>\r\n        <div class=\"panel-body\">\r\n            <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                    aria-hidden=\"true\"></button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + container.escapeExpression(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                    aria-hidden=\"true\"></button>\r\n\r\n            <div id=\"materializedatasets-view\">\r\n                <div>\r\n                    <button id=\"materialize-save-as-domain\" class=\"btn btn-default\"  data-toggle=\"materialize-virtualize-tooltip\" data-placement=\"bottom\"\r\n                       title=\"Create a virtual dataset. The datasets is not actually reinjected but stays as domain without physical existence.\" target=\"_blank\">Save as domain</button>\r\n                </div>\r\n                <div>\r\n                    <button id=\"materialize-save-as-table\" class=\"btn btn-default\" data-toggle=\"materialize-materialize-tooltip\" data-placement=\"bottom\"\r\n                       title=\"Create a physical dataset. The datasets/table is created on the specified database.\" target=\"_blank\">Save as table</button>\r\n                </div>\r\n                <div>\r\n                    <button id=\"materialize-save-on-spark\" class=\"btn btn-default\" data-toggle=\"materialize-spark-tooltip\" data-placement=\"bottom\"\r\n                            title=\"Send the dataset to spark\" target=\"_blank\">Save on Spark</button>\r\n                </div>\r\n            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        </div>\r\n        </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <a href=\"#\" data-toggle=\"materialize-tooltip\" data-placement=\"top\"\r\n           title=\"You can use this button to reinject the current dataset. For example, you may want to reinject the new dataset in the same database as an other table to save your current work.\">\r\n            <button type=\"button\" class=\"btn popup-trigger form-control\">Save <i class=\"fa fa-cloud\"></i></button>\r\n        </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"squid-api-data-widgets-materialize-widget\">\r\n    <div class=\"download-wrapper\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.materializeDatasetsView : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInPopup : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_metric_total_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " squid-api-data-widgets-metrictotal-widget\" style=\"padding: 3px; display: inline-block;\" id=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" >\r\n		<table style=\"border:1px solid #DDD; border-collapse: separate; border-spacing: 3px;\">\r\n			<tr>\r\n				<td><span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></td>\r\n			</tr>\r\n			<tr>\r\n				<td><span class=\"value\" style=\"color:#999;\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.total : depth0)) != null ? stack1.value : stack1), depth0))
    + "</span></td>\r\n			</tr>\r\n		</table>\r\n	</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " selected";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <label>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <span>-</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selAvailable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_metric_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"information\">"
    + container.escapeExpression(((helper = (helper = helpers.noDataMessage || (depth0 != null ? depth0.noDataMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"noDataMessage","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.chosenMetrics : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selectMetric : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        	<div class=\"name\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayMetricValue : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    		<li class=\"item "
    + alias2(alias1((depth0 != null ? depth0.selected : depth0), depth0))
    + "\" data-selected=\""
    + alias2(alias1((depth0 != null ? depth0.attrSelected : depth0), depth0))
    + "\" data-content=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    		<li class=\"item\" data-selected=\""
    + alias2(alias1((depth0 != null ? depth0.attrSelected : depth0), depth0))
    + "\" data-content=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        		<div class=\"value\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.total : depth0)) != null ? stack1.value : stack1), depth0))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"squid-api-data-widgets-metric-widget\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noChosenMetrics : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_modelinfo_internal_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <tr>\n                    <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td>\n                </tr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <tr>\n                        <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td>\n                    </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"squid-api-modelinfo-internal-view\">\n    <div class=\"col-md-6 nopadding\">\n        <h4>"
    + alias4(((helper = (helper = helpers.dimensionsLabel || (depth0 != null ? depth0.dimensionsLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dimensionsLabel","hash":{},"data":data}) : helper)))
    + "</h4>\n        <table class=\"table table-condensed dimensions\">\n        <thead>\n        <tr>\n          <th>"
    + alias4(((helper = (helper = helpers.nameLabel || (depth0 != null ? depth0.nameLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nameLabel","hash":{},"data":data}) : helper)))
    + "</th>\n          <th>"
    + alias4(((helper = (helper = helpers.descriptionLabel || (depth0 != null ? depth0.descriptionLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descriptionLabel","hash":{},"data":data}) : helper)))
    + "</th>\n        </tr>\n        </thead>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.dimensions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\n    </div>\n    <div class=\"col-md-6 nopadding\">\n        <h4>"
    + alias4(((helper = (helper = helpers.metricsLabel || (depth0 != null ? depth0.metricsLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metricsLabel","hash":{},"data":data}) : helper)))
    + "</h4>\n        <table class=\"table table-condensed metrics\">\n            <thead>\n             <tr>\n               <th>"
    + alias4(((helper = (helper = helpers.nameLabel || (depth0 != null ? depth0.nameLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nameLabel","hash":{},"data":data}) : helper)))
    + "</th>\n               <th>"
    + alias4(((helper = (helper = helpers.descriptionLabel || (depth0 != null ? depth0.descriptionLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descriptionLabel","hash":{},"data":data}) : helper)))
    + "</th>\n            </tr>\n            </thead>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.metrics : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\n    </div>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_modelinfo_widget"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"squid-api-modelinfo-widget\">\n    <button class=\"btn btn-default form-control\" role=\"button\" data-toggle=\"popover\">\n        <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n    </button>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_orderby_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"pull-left\">\n			<table>\n				<tr>\n					<td>\n						<span class=\"preview\" style=\"font-size : 14px; padding-right: 5px; position: relative; top: 3px;\">Preview</span>\n					</td>\n					<td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.removeOrderDirection : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "					</td>\n					<td>\n						&nbsp;\n						<span style=\"font-size : 14px; font-weight: bold; padding-right: 5px; position: relative; top: 4px;\">"
    + container.escapeExpression(((helper = (helper = helpers.limit || (depth0 != null ? depth0.limit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"limit","hash":{},"data":data}) : helper)))
    + "</span> <label style=\"position: relative; top: 4px; font-weight: normal;\">by</label> <select class=\"sq-select form-control\" style=\"display: inline-block; position: relative; bottom: 5px; max-width: 100px;\">\n							<option>none</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Columns : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</select>\n					</td>\n				</tr>\n			</table>\n		</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "							<span class=\"orderby-direction\" style=\"top: 3px; position: relative; font-weight: bold; font-size: 14px;\">"
    + container.escapeExpression(((helper = (helper = helpers.orderByDirectionDisplay || (depth0 != null ? depth0.orderByDirectionDisplay : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"orderByDirectionDisplay","hash":{},"data":data}) : helper)))
    + "<span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<div class=\"onoffswitch\">\n			    				<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			    				<label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n			        				<span class=\"onoffswitch-inner\"></span>\n			       				 	<span class=\"onoffswitch-switch\"></span>\n			    				</label>\n							</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "checked";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "								<option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"orderby-container squid-api-data-widgets-orderby-widget "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.limit : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_project_selector_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <select class=\"sq-select form-control squid-api-data-widgets-project-selector\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\r\n            </option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "selected";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <!-- just display filter name -->\r\n    <label>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <span>-</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selAvailable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["squid_api"]["template"]["squid_api_saveasdomain_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <button type=\"button\"  class=\"create btn btn-default\">\r\n                <i class=\"fa fa-plus\"></i> New "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\r\n            </button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"panel panel-default filter-panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                                data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                            <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                        </button>\r\n                        <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n                    </div>\r\n                <div class=\"panel-body\">\r\n                    <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                            aria-hidden=\"true\"></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"squid-api-collection-management-widget\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.createRole : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"squid-api-data-widgets-saveastable-widget \">\r\n            <div class=\"download-wrapper\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                        aria-hidden=\"true\"></button>\r\n                <div style=\"display: inline-block;\">\r\n                    <div><label for=\"name\">Name: </label> <input value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"name\" name=\"name\"></div>\r\n                </div>\r\n                <div id=\"saveasdomain-view\">\r\n                    <div><label for=\"projectName\">Project: </label> <input value=\""
    + alias4(((helper = (helper = helpers.projectName || (depth0 != null ? depth0.projectName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"projectName\" name=\"projectName\"></div>\r\n                    <div><label for=\"schemaName\">Schema: </label> <input value=\""
    + alias4(((helper = (helper = helpers.schemaName || (depth0 != null ? depth0.schemaName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaName","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"schemaName\" name=\"schemaName\"></div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"squid-api-model-management-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close without saving</button>\r\n    <button type=\"button\" class=\"btn btn-default save-close\" data-dismiss=\"modal\">Save and Close</button>\r\n</div>\r\n<!--  end of modal - -->\r\n</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_saveastable_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <button type=\"button\"  class=\"create btn btn-default\">\r\n                <i class=\"fa fa-plus\"></i> New "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\r\n            </button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"panel panel-default filter-panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                                data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                            <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                        </button>\r\n                        <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n                    </div>\r\n                <div class=\"panel-body\">\r\n                    <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                            aria-hidden=\"true\"></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"squid-api-collection-management-widget\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.createRole : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"squid-api-data-widgets-saveastable-widget \">\r\n            <div class=\"download-wrapper\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                        aria-hidden=\"true\"></button>\r\n                <div style=\"display: inline-block;\">\r\n                    <div><label for=\"name\">Name: </label> <input value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"name\" name=\"name\"></div>\r\n                </div>\r\n                <div id=\"saveastable-view\">\r\n                    <div><label for=\"projectName\">Project: </label> <input value=\""
    + alias4(((helper = (helper = helpers.projectName || (depth0 != null ? depth0.projectName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"projectName\" name=\"projectName\"></div>\r\n                    <div><label for=\"schemaName\">Schema: </label> <input value=\""
    + alias4(((helper = (helper = helpers.schemaName || (depth0 != null ? depth0.schemaName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaName","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"schemaName\" name=\"schemaName\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"squid-api-model-management-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close without saving</button>\r\n    <button type=\"button\" class=\"btn btn-default save-close\" data-dismiss=\"modal\">Save and Close</button>\r\n</div>\r\n<!--  end of modal - -->\r\n</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_saveonspark_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <button type=\"button\"  class=\"create btn btn-default\">\r\n                <i class=\"fa fa-plus\"></i> New "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\r\n            </button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"panel panel-default filter-panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <button type=\"button\" class=\"close\" data-toggle=\"collapse\"\r\n                                data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\r\n                            <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n                        </button>\r\n                        <h4 class=\"panel-title\" id=\"myModalLabel\">Save</h4>\r\n                    </div>\r\n                <div class=\"panel-body\">\r\n                    <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                            aria-hidden=\"true\"></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"squid-api-collection-management-widget\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.createRole : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"squid-api-data-widgets-saveastable-widget \">\r\n            <div class=\"download-wrapper\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayInAccordion : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                <button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"\r\n                        aria-hidden=\"true\"></button>\r\n                <div style=\"display: inline-block;\">\r\n                    <div><label for=\"name\">Name: </label> <input value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" id=\"name\" name=\"name\"></div>\r\n                </div>\r\n                <div id=\"saveastable-view\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"squid-api-model-management-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close without saving</button>\r\n    <button type=\"button\" class=\"btn btn-default save-close\" data-dismiss=\"modal\">Save and Close</button>\r\n</div>\r\n<!--  end of modal - -->\r\n</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_timeseries_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div id=\"time-unit-selector\">\n        <select class=\"form-control\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.timeUnits : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <option value="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " data-i18n=\"i18n\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='sq-loading' style='position:absolute; width:100%; top:40%; z-index: 2;'>\n    <div class=\"spinner\">\n    <div class=\"rect5\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n    </div>\n</div>\n<div id=\"chart_container\" class=\"squid-api-data-widgets-timeseries-widget\">\n    <div id=\"yearswitcher\"></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.timeUnitSelector : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"metrics\">\n        "
    + alias4(((helper = (helper = helpers.metricColumns || (depth0 != null ? depth0.metricColumns : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metricColumns","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <div id=\"stale\">\n        <div class=\"reactiveMessage\">\n            <span><i class=\"fa fa-line-chart\"></i>\n            <br>"
    + alias4(((helper = (helper = helpers.staleMessage || (depth0 != null ? depth0.staleMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staleMessage","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n    </div>\n    <div id=\"re-run\" style=\"display: none;\">\n            <div class=\"reactiveMessage\">\n                <span><i class=\"fa fa-refresh\"></i>\n                <br>"
    + alias4(((helper = (helper = helpers.reRunMessage || (depth0 != null ? depth0.reRunMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reRunMessage","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n        </div>\n    <div id=\"legend\" />\n    <div id=\"brushing\" style=\"display: none;\">\n        <a data-i18n=\"double-click-zoom-out\">Double click the visulisation to zoom out</a>\n    </div>\n    <div id=\"widget\">\n\n    </div>\n    <div id=\"error\" />\n</div>\n";
},"useData":true});
(function(root, factory) {
    root.squid_api.controller.AnalysisController = factory(root.Backbone,
            root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = Backbone.View.extend({
        analysis : null,
        config : null,
        pagination: null,
        autoRefresh: null,
        ignoreConfigChange: null,

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
                if (options.pagination) {
                    this.pagination = options.pagination;
                }
                if (options.afterInitializedCallback) {
                    this.afterInitializedCallback = options.afterInitializedCallback;
                }
                if (options.autoRefresh) {
                    this.autoRefresh = options.autoRefresh;
                }
                if (options.ignoreConfigChange) {
                    this.ignoreConfigChange = options.ignoreConfigChange;
                }
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }
            
            this.listenTo(squid_api.model.status, "change:configReady", function() {
                if (squid_api.model.status.get("configReady") === true) {
                    me.refreshAnalysis();
                }
            });

            // controller
            if (! this.ignoreConfigChange) {
                this.listenTo(this.config, "change", function() {
                    var refreshNeeded = false;
                    if (this.config.hasChanged("project")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("domain")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("chosenDimensions")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("chosenMetrics")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("limit")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("rollups")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("orderBy")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("selection")) {
                        refreshNeeded = true;
                    }   
                    if (this.config.hasChanged("startIndex")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("timeUnit")) {
                        refreshNeeded = true;
                    }
                    if (refreshNeeded && (squid_api.model.status.get("configReady") === true)) {
                    	if (this.config.hasChanged("startIndex") === false) {
                    		this.config.set("startIndex",0, {silent: true});
                    		this.config.set("pageIndex",0, {silent: true});
                    	}
                        this.refreshAnalysis(true);
                    }
                });
            }

            if (this.afterInitializedCallback) {
                this.afterInitializedCallback.call(this);
            }
            if (this.autoRefresh) {
                this.refreshAnalysis();
            }
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
                "orderBy" : $.extend(true, [], config.get("orderBy"))
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            if (this.pagination) {
                a.setParameter("maxResults", this.config.get("maxResults") || 10, silent);
                var configStartIndex = this.config.get("startIndex") || 0;
                var startIndexChange = false;
                if (a.getParameter("startIndex") !== null) {
                    startIndexChange = (a.getParameter("startIndex") !== configStartIndex);
                }
                if (startIndexChange && (this.config.hasChanged("startIndex") && !this.config.hasChanged("selection"))) {
                    // update if pagination changed
                    if (a.get("id") && (a.get("id").analysisJobId)) {
                        a.setParameter("startIndex", configStartIndex, silent);
                        this.onChangeHandler(a);
                        squid_api.compute(a);
                    }
                }
            }
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
		
		maxLength : 0,

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
				this.d3Formatter = d3.format(",.0f");
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
					series: [],
					metrics: [],
					values: [],
					labels: [],
					title: ""
			};
			var currentLbl = "Current";
            if (typeof $.i18n !== "undefined") {
            	currentLbl=$.i18n.t("bar-current");
            }
			barData.series.push(currentLbl);
			// check to see if we only display totals
			var onlyMetrics = true;
			var hasCompare = false;
			for (i=0; i<cols.length; i++) {
				if (cols[i].role !== "DATA") {
					onlyMetrics = false;
					domainIndex = i;
				} else {
					if (cols[i].extendedType.scale>0) {
						this.d3Formatter = d3.format(",.2f");
					}
					if (cols[i].originType === "COMPARETO") {
						hasCompare = true;
					} else {
						barData.metrics.push({"name": cols[i].name, "format": cols[i].extendedType.scale>0?",.2f":",.0f", values: []});
					}
				}
			}
			if (hasCompare) {
				var compareLbl = "Current";
	            if (typeof $.i18n !== "undefined") {
	            	compareLbl=$.i18n.t("bar-compare");
	            }
				barData.series.push(compareLbl);
			}
			if (onlyMetrics) {
				var summaryLbl = "Current";
	            if (typeof $.i18n !== "undefined") {
	            	summaryLbl=$.i18n.t("bar-summary");
	            }
				barData.title = summaryLbl;
			}
			// store bar data
			for (i=0; i<rows.length; i++) {
				var row = rows[i].v;
				var yAxis1 = "";
				var xAxis1;
				var offset = 0;
				for (ix=0; ix<row.length; ix++) {
					var item1 = row[ix];
					var idx = Math.floor((ix-offset)/barData.metrics.length);
					if (cols[ix].role === "DOMAIN") {
						if ( item1 === null) {
							item1 = "";
						}
						if (yAxis1.length === 0) {
							yAxis1 += item1;
						} else {
							yAxis1 += " / " + item1;
						}
						offset++;
					} else if (cols[ix].role === "DATA" || item1 === null) {
						xAxis1 = item1;
						barData.values.push(item1);
						barData.metrics[idx].values.push(item1);
						if (hasCompare) {
							barData.values.push(row[ix+1]);
							barData.metrics[idx].values.push(row[ix+1]);
						}
						if (onlyMetrics) {
							yAxis1 = cols[ix].name;
						} else {
							barData.title = cols[ix].name;
						}
						if (yAxis1) {
							yAxis1 = yAxis1.trim();
						}
						barData.labels.push(yAxis1);
						if (!hasCompare) {
							break;
						}
						ix++;
					}

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
			var isInCache = this.model.get("status") === "PENDING";
			this.$el.html(this.template({
				done: done,
				isInCache: isInCache
			}));
		},

		wrap: function(text, width, me) {
			x = 9;
			text.each(function() {
				var text = d3.select(this),
				words = text.text().split(/\s+/).reverse(),
				word,
				line = [],
				lineNumber = 0,
				lineHeight = 1.1, // ems
				y = text.attr("y"),
				dy = parseFloat(text.attr("dy")),
				tspan = text.text(null).append("tspan").attr("x", (-x)).attr("y", y).attr("dy", dy + "em");
				while ((word = words.pop())) {
					if (lineNumber<2) {
						line.push(word);
						tspan.text(line.join(" "));
						me.maxLength = Math.max(me.maxLength, tspan.node().getComputedTextLength());
						if (tspan.node().getComputedTextLength() > width - x) {
							line.pop();
							if (lineNumber === 1) {
								lineNumber++;
								line.push("...");
								tspan.text(line.join(" "));
							} else {
								tspan.text(line.join(" "));
								line = [word];
								tspan = text.append("tspan").attr("x", (-x)).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
							}
						}
					}
				}
				if (lineNumber >= 1) {
					text.selectAll("tspan")
					.attr('dy', function(d, i) {
						return (-dy + (i * lineHeight)) + "em";
					});
				} 
			});
			me.maxLength = Math.round(Math.min(me.maxLength + x,width));
		},

		render: function() {
			var me = this;
			var data = this.getData();
			var status = this.model.get("status");
			var error = this.model.get("error");

			if (data.results && data.done && ! error) {

				//ToolTip Declaration
				var tooltip = d3.select('body').append('div')
				.classed("bar-chart-tooltip" ,true);
				// Print Template
				this.renderBase(true);

				// Obtain Bar Chart Data
				data = this.barDataValues(data.results.cols, data.results.rows);

				// Pre definitions for the bar chart
				var chartWidth       = this.$el.find("#bar_chart").width(),
				barHeight        = 20,
				gapBetweenGroups = 10,
				spaceForLabels   = 250,
				spaceForAxis	 = 20,
				spaceForTitle	 = 20;

				chartWidth = chartWidth - spaceForLabels;

				// Color scale
				var color = d3.scale.category20();
				var chartHeight = barHeight * data.values.length + gapBetweenGroups * data.labels.length;

				var x = d3.scale.linear()
				.domain([0, d3.max(data.values)])
				.range([0, chartWidth]);

				var y = d3.scale.ordinal()
				.domain(data.labels)
				.rangePoints([0, chartHeight]);

				var xAxis = d3.svg.axis()
				.scale(x)
				.tickFormat(d3.format("s"))
				.orient('bottom');

				var yAxis = d3.svg.axis()
				.scale(y)
				.ticks(10)
				.orient("left");

				// Specify the chart area and dimensions
				var chart = d3.select("#bar_chart")
				.append("svg")
				.append("g")
				.attr("class", "chart")
				.attr("transform","translate(0,"+spaceForTitle+")");
				
				var bar = chart.selectAll("g");
				
				// yAxis (Starting 150px from right)
				var yAxisAppend = d3.select("#bar_chart svg")
				.append("g")
				.attr('class', 'axis')
				.attr('height', chartHeight)
				.call(yAxis)
				;

				me.maxLength = 0;
				// Y aXis label spacing
				yAxisAppend.selectAll(".tick")
				.attr("transform", function(d, i) {
					var translation = (-1 + gapBetweenGroups/2 + barHeight/2*data.series.length + (i * (barHeight*data.series.length + gapBetweenGroups)));
					return "translate(0," + translation + ")";
				})
				.selectAll("text")
				.call(this.wrap, spaceForLabels, me);
				
				spaceForLabels = me.maxLength;
				
				yAxisAppend.attr('transform', 'translate('+spaceForLabels+','+spaceForTitle+')');
				
				d3.select("#bar_chart svg").attr("width", chartWidth)
				.attr("height", chartHeight + spaceForAxis + spaceForTitle)
				.attr("style", "overflow: visible;");


				d3.select("svg")
				.append("text")
		        .attr("x", (spaceForLabels + chartWidth / 2))             
		        .attr("y", (14))
		        .attr("text-anchor", "middle")  
		        .style("font-size", "16px") 
		        .text(data.title);

				// Create bars
				bar.data(data.values)
				.enter().append("g")
				.attr("transform", function(d, i) {
					return "translate("+spaceForLabels+", " + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
				})
				.append("rect")
				.attr("fill", function(d,i) { return color(i % data.series.length); })
				.attr("class", "bar")
				.attr("width", x)
				.attr("height", barHeight - 1)
				.on('mouseover', function(d, i) {
					var tooltipText = "";
					var currentIdx = i -  i % data.series.length;
					for (t=0; t< data.series.length; t++) {
						tooltipText += "<div>" + data.series[t] + " : " + me.d3Formatter(data.values[currentIdx + t]) + "</div>";
					}
					tooltip.transition()
					.style('opacity', 1);
					tooltip.html(tooltipText)
					.style('left', (d3.event.pageX - 35) + 'px')
					.style('top',  (d3.event.pageY - (30 * data.series.length)) + 'px');
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
				// available callback options (to check)
				.attr('width', function(d) {
					return x(d);
				})
				.delay(function(d, i) {
					return i * 20;
				})
				.duration(1000)
				.ease('bounce')
				;

				// xAxis (Starting 200px from left)
				xAxis = d3.select("#bar_chart svg")
				.append("g")
				.attr('class', 'axis')
				.attr('width', chartWidth)
				.attr('x', 400)
				.attr('transform', 'translate('+spaceForLabels+', ' + (chartHeight - 1 + spaceForTitle) + ')')
				.call(xAxis);

			} else {
				// Print Template
				this.renderBase(false);
			}
			if (status === "RUNNING") {
				this.$el.find("#sq-loading").show();
				this.$el.find("#re-run").hide();
			} else {
				this.$el.find("#sq-loading").hide();
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
        afterRender: null,

        initialize: function(options) {
            this.status = squid_api.model.status;

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
                if (options.afterRender) {
                    this.afterRender = options.afterRender;
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
            this.listenTo(this.config, "change:currentAnalysis", this.render);
            this.listenTo(this.status, "change", this.enable);
        },

        enable: function() {
            if (this.status.get("status") === "RUNNING") {
                this.$el.find("button").prop("disabled", true);
            } else {
                this.$el.find("button").prop("disabled", false);
            }
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

            // compute the view types compatible with the model
            var compatibleViews = [];

            this.addCompatibleView(compatibleViews, "tableView");
            this.addCompatibleView(compatibleViews, "timeView");
            this.addCompatibleView(compatibleViews, "barView");

            // compute the current selected view
            var analysis = this.model.get(this.config.get("currentAnalysis"));
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

            if (this.afterRender) {
                this.afterRender.call(this);
            }

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

		enableFormatting : true,

		paginationView : null,

		rollupSummaryColumn : null,

		rollups : null,

		reRunMessage : "Please manually refresh your analysis",

		staleMessage : "Click refresh to update",

		currentDomain : null,

		addFacetValueFromResults: false,

		initialize : function(options) {
			var me = this;

			// config is used for orderBy
			if (options.config) {
				this.config = options.config;
			} else {
				this.config = squid_api.model.config;
			}

			if (this.model) {
				this.listenTo(this.model, 'change:error', function() {
					console.log("DEBUG:"+"DataTable error change : "+this.model.get("error"));
					me.render();
				});
				this.listenTo(this.model, 'change:status', function() {
					console.log("DEBUG:"+"DataTable status change : "+this.model.get("status"));
					me.render();
				});
				this.listenTo(this.model, 'change:facets', function() {
					console.log("DEBUG:"+"DataTable facets change : "+this.model.get("facets"));
					me.render();
				});
				this.listenTo(this.model, 'change:metricList', function() {
					console.log("DEBUG:"+"DataTable metricList change : "+this.model.get("metricList"));
					me.render();
				});
				this.listenTo(this.model, 'change:orderBy', function() {
					console.log("DEBUG:"+"DataTable orderBy change : "+this.model.get("orderBy"));
					me.render();
				});
			}

			// setup options
			if (options.template) {
				this.template = options.template;
			} else {
				this.template = squid_api.template.squid_api_datatable_widget;
			}

			// detect analysis formatting
			var optionKeys = this.model.get("optionKeys");
			if (optionKeys) {
				if (optionKeys.applyFormat === true) {
					squid_api.utils.checkAPIVersion(">=4.2.15").done(function(){
						this.enableFormatting = false;
					}).fail(function(v){
						if (v) {
							console.log("API version NOT OK : "+v + " for Automatic Analysis Results Formatting");
						} else {
							console.error("WARN unable to get Bouquet Server version");
						}
					});
				}
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
			if (options.addFacetValueFromResults) {
				this.addFacetValueFromResults = options.addFacetValueFromResults;
			}
			if (this.enableFormatting) {
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
			}

			this.renderBaseViewPort();
		},

		events : ({
			"click thead th" : function(event) {
				if ($(event.currentTarget).attr("aria-describedby")) {
					$(event.currentTarget).tooltip("destroy");
				}

				if (this.ordering) {
					var orderBy = this.config.get("orderBy");
					var expressionValue = $(event.currentTarget).attr("data-content");
					var obj = {"expression" : {"value" : expressionValue}};
					if (orderBy) {
						if (orderBy[0]) {
							if (orderBy[0].expression) {
								if (orderBy[0].expression.value === expressionValue) {
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
			},
			"click td.dimension" : function(event) {
				if (this.addFacetValueFromResults) {

					var value = $(event.currentTarget).text();
					var facetId = $(event.currentTarget).parents('tbody').siblings('thead').find('> tr > th:eq(' + $(event.currentTarget).index() + ')').attr("data-content");

					var selectionClone = $.extend(true, {}, this.filters.get("selection"));
					var facets = selectionClone.facets;
					if (facets) {
						for (i=0; i<facets.length; i++) {
							if (facets[i].id === facetId) {
								var selectedItems = facets[i].selectedItems;
								var add = true;
								for (ix=0; ix<selectedItems.length; ix++) {
									if (selectedItems[ix].value === value) {
										add = false;
										delete facets[i].selectedItems[ix];
									}
								}
								if (add) {
									facets[i].selectedItems.push({
										id    : value,
										type  : "v",
										value : value
									});
								}
							}
						}
						// Set the updated filters model
						this.config.set("selection", squid_api.utils.buildCleanSelection(selectionClone));
					}
				}
			}
		}),

		setModel : function(model) {
			this.model = model;
			this.initialize();
		},

		getColumnIdentifier : function(col) {
			if (col.definition && col.definition.startsWith("@")) {
				return col.definition;
			} else if (col.pk){
				var lastPos = col.name.indexOf(" [");
				var name = col.name;
				if (lastPos>1) {
					name = col.name.substring(0,lastPos);
				}
				var id = "@'"+col.pk.domainId+"'.";
				if (col.role === "DATA") {
					id += "[measure:'"+name+"']";
					if (col.originType === "GROWTH") {
						id = "growth("+id+")";
					} else if (col.originType === "COMPARETO") {
						id = "compareTo("+id+")";
					}
				} else {
					id += "@'"+col.id+"'";
				}
				return id;
			} else {
				return col.id;
			}
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

		displayTableHeader : function(selector, arr) {
			//First clean old tooltips if any
			var tooltips = $("div[role='tooltip']");
			var it = 0;
			for (it=0;it<tooltips.length;it++) {
				tooltips[it].remove();
			}
			var r = Math.random();
			var me = this;
			me.displayTableHeaderStep2(selector, arr, r);
		},

		displayTableHeaderStep2 : function(selector, domainMetrics, r) {
			console.log("DEBUG:"+"displayTableHeader start "+r);
			var me = this;
			var i, j;
			var domain = this.config.get("domain");
			var metrics;
			if (domain) {
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
					columns = $.extend(true, [], results.cols);

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
								var facetWithAlias = facets[i].value;
								var alias = null;
								var facetId = facetWithAlias;
								if (facetWithAlias.toLowerCase().indexOf("' as '") !== -1) {
									facetId = facetWithAlias.substring(0, facetWithAlias.toLowerCase().indexOf("' as '")+1);
									alias =  facetWithAlias.substring(facetWithAlias.toLowerCase().indexOf("' as '")+6, facetWithAlias.length-1);
								}
		
								obj = squid_api.utils.find(this.filters.get("selection").facets, "id", facetId) || {};
								if (obj) {
									obj = {
											dataType : "STRING",
											name : alias === null? obj.name:alias,
											id : obj.id
									};
									columns.push(obj);
								} else {
									// impossible to get column data from selection
									invalidSelection = true;
									console.error("ERROR:"+"displayTableHeader invalidSelection");
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
									for (ix=0; ix<domainMetrics.length; ix++) {
										if (metrics[i].id.metricId === domainMetrics[ix].oid) {
											metrics[i].name = domainMetrics[ix].name;
										}
									}
									obj = squid_api.utils.find(domainMetrics, "oid", metrics[i].id.metricId) || {};
									if (obj) {
										obj = {
												dataType : "NUMBER",
												name : metrics[i].name,
												id : metrics[i].value
										};
										columns.push(obj);
									} else {
										// impossible to get column data from selection
										invalidSelection = true;
									}
								} else {
									obj = {
											dataType : "NUMBER",
											name : (typeof metrics[i].name !== "undefined"?metrics[i].name:""),
											id :  (typeof metrics[i].expression !== "undefined"?metrics[i].expression.value:"")
									};
									columns.push(obj);
								}
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
					if (columns) {
						for (col=0; col<columns.length; col++) {
							if (columns[col]) {
								columns[col].orderDirection = undefined;
								var colIdentifier = me.getColumnIdentifier(columns[col]);
								for (ix=0; ix<orderBy.length; ix++) {
									if (this.ordering) {
										if (colIdentifier === orderBy[ix].expression.value) {
											columns[col].orderDirection = orderBy[ix].direction;
											break;
										}
/*
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
 */
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

				// set compare col
				this.compareCols = [];
				this.metricCols = [];
				this.dateCols = [];
				this.firstMeasure = -1;
				if (columns) {
					for (i=0; i<columns.length; i++) {
						if (columns[i].originType === "COMPARETO") {
							this.compareCols.push(i);
							if (this.firstMeasure === -1 || this.firstMeasure>i) {
								this.firstMeasure = i;
							}
						}
						if (columns[i].role === "DATA") {
							this.metricCols.push(i);
							if (this.firstMeasure === -1 || this.firstMeasure>i) {
								this.firstMeasure = i;
							}
						}
						if (columns[i].extendedType) {
							if (columns[i].extendedType.name === "DATE") {
								this.dateCols.push(i);
							}
						}
					}
				}

				if (squid_api.model.config.has("hiddenTableColumns")) {
					var hiddenTableColumns = squid_api.model.config.get("hiddenTableColumns");
					for (i=0; i<hiddenTableColumns.length; i++) {
						for (j=0; j<columns.length; j++) {
							if (typeof columns[j].id !== "undefined" && columns[j].id.indexOf(hiddenTableColumns[i])!==-1) {
								columns.splice(j,1);
								break;
							}
						}
					}
				}
				if (!invalidSelection && columns) {
					console.info("DEBUG:"+"displayTableHeader D3, cols :"+columns.length);
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
						if (me.compareCols) {
							if (me.compareCols.length > 0) {
								if (me.compareCols.indexOf(i) > -1) {
									str += " compareTo";
								} else if (me.metricCols.indexOf(i) > -1) {
									str += " compare";
								}
							}
						}
						return str;
					})
					.html(function(d) {
						var str = d.name;
						var upArrow = "&#xffea;";
						var downArrow = "&#xffec;";
						if (d.orderDirection) {
							if (d.dataType === "NUMBER" || (d.extendedType && d.extendedType.name === "int4") || (d.extendedType && d.extendedType.name === "int8")) {
								if (d.orderDirection === "ASC") {
									str = str + " " + "<span class='sort-direction'>" + upArrow + "</span>";
								} else if (d.orderDirection === "DESC") {
									str = str + " " + "<span class='sort-direction'>" + downArrow + "</span>";
								}
							} else {
								if (d.orderDirection === "ASC") {
									str = str + " " + "<span class='sort-direction'>" + upArrow + "</span>";
								} else if (d.orderDirection === "DESC") {
									str = str + " " + "<span class='sort-direction'>" + downArrow + "</span>";
								}
							}
						}

						return str;
					})
					.attr("data-role", function(d) {
						return d.role;
					})
					.attr("origin-type", function(d) {
						return d.originType;
					})
					.attr("data-content", function(d) {
						return me.getColumnIdentifier(d);
						/*if (!d.role || d.role !== "DATA") {
							if (d.definition) {
								return d.definition;
							} else {
								return d.id;
							}	
						} else {
							if (d.definition && d.definition.startsWith("@")) {
								return d.definition;
							} else if (d.pk){
								var lastPos = d.name.indexOf(" [");
								var name = d.name;
								if (lastPos>1) {
									name = d.name.substring(0,lastPos);
								}
								var id = "@'"+d.pk.domainId+"'.[measure:'"+name+"']";
								if (d.originType === "GROWTH") {
									id = "growth("+id+")";
								} else if (d.originType === "COMPARETO") {
									id = "compareTo("+id+")";
								}
								return id;
							} else {
								return d.id;
							}
						}*/
					});

					// add class if more than 10 columns
					if (this.$el.find("thead th").length > 10) {
						this.$el.find("table").addClass("many-columns");
					} else {
						this.$el.find("table").removeClass("many-columns");
					}

					// add tooltips on metrics / compare columns
					var headerCols = this.$el.find("thead th");
					squid_api.getCustomer().then(function(customer) {
						return customer.get("projects").load(me.config.get("project")).then(function(project) {
							return project.get("domains").load(me.config.get("domain")).then(function(domain) {
								for (ix=0; ix<headerCols.length; ix++) {
									var column = $(headerCols[ix]);

									var role = column.attr("data-role");
									var originType = column.attr("origin-type");
									var id = column.attr("data-content");
									var metricItem, metricItemDescription;
									
									/*var options = {
											position: {
												my: "center bottom",
												at: "center top+5",
											}
									};*/

									if (role === "DATA" && originType === "USER") {
										// metric
										metrics = domain.get("metrics");
										metricItem = metrics.findWhere({"definition" : id});
										metricItemDescription = "";
										if (metricItem) {
											metricItemDescription = metricItem.get("description");
										}
										column.attr("title", metricItemDescription);
										//column.tooltip(options);
									} else if (originType === "COMPARETO" || originType === "GROWTH") {
										// compare column
										results = squid_api.model.filters.get("results");
										if (results) {
											var compareTo = results.compareTo;
											if (compareTo) {
												if (compareTo[0]) {
													if (compareTo[0].selectedItems[0]) {
														var lowerBound = moment(compareTo[0].selectedItems[0].lowerBound).utc().format("ll");
														var upperBound = moment(compareTo[0].selectedItems[0].upperBound).utc().format("ll");
														metrics = domain.get("metrics");
														if (typeof id !== "undefined") {
															metricItem = metrics.findWhere({"definition" : id.replace(/.*\(([^\)]+)\)/, "$1")});
															metricItemDescription = "metric";
															if (metricItem) {
																metricItemDescription = metricItem.get("name");
															}
														} else {
															metricItemDescription = "";
														}

														var columnTitle = "Metric " + (originType === "COMPARETO"? "comparison":"growth") + " on period " + lowerBound + " to " + upperBound;
														if (typeof $.i18n !== "undefined") {
															columnTitle = $.i18n.t("compare-growth-title", {"type":(originType === "COMPARETO"? $.i18n.t("comparison-label"):$.i18n.t("growth-label")), "metric":metricItemDescription, "lower":lowerBound, "upper":upperBound});
											            }

														column.attr("title", columnTitle);
													}
												}
											}
										}
										//column.tooltip(options);
									} else if (typeof id !== "undefined"){
										var dimensions = domain.get("dimensions");
										var dimension = dimensions.findWhere({"oid" : id.replace(/.*'([^']+)'/, "$1")});
										var dimensionDescription = "";
										if (dimension) {
											dimensionDescription = dimension.get("description");
										}
										column.attr("title", dimensionDescription);
										//column.tooltip(options);
									}
								}
							});
						});
					});
				}
			}
			console.log("DEBUG:"+"displayTableHeader end "+r);
		},

		displayTableContent : function(selector) {
			console.log("DEBUG:"+"displayTableContent start");
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
				data.results = {"cols" : $.extend(true, [], results.cols), "rows" : results.rows};
				if (this.enableFormatting) {
					var hiddenIndices = [];
					if (squid_api.model.config.has("hiddenTableColumns")) {
						var hiddenTableColumns = squid_api.model.config.get("hiddenTableColumns");
						for (i=0; i<hiddenTableColumns.length; i++) {
							for (j=0; j<results.cols.length; j++) {
								if (typeof results.cols[j].id !== "undefined" && results.cols[j].id.indexOf(hiddenTableColumns[i])!==-1) {
									hiddenIndices.push(j);
								}
							}
						}
						for (i=hiddenIndices.length-1; i>=0; i--) {
							data.results.cols.splice(i,1);
						}
					}
					data.results.rows = [];
					rows = results.rows;
					for (rowIdx = 0; (rowIdx<rows.length && rowIdx<this.maxRowsPerPage); rowIdx++) {
						row = rows[rowIdx];
						newRow = {v:[]};
						var offsetCol = 0;
						for (colIdx = 0; colIdx<results.cols.length; colIdx++) {
							var display = true;
							if (hiddenIndices.length>0) {
								if (hiddenIndices.indexOf(colIdx) !== -1) {
									display = false;
									offsetCol++;
								}
							}
							if (display) {
								v = row.v[colIdx];
								if ("GROWTH" !== results.cols[colIdx].originType && results.cols[colIdx].extendedType) {
									var words = results.cols[colIdx].name.split(" ");
									var toRound = true;
									for (i=0; i<words.length; i++) {
										// see if column header contains the text duration / time
										if (words[i].toLowerCase() === "duration" || words[i].toLowerCase() === "time") {
											toRound = false;
											v = squid_api.utils.formatTime(v, this.d3Formatter, results.cols[colIdx].format);
										}
									}
								}
								newRow.v.push(v);
							}
						}
						data.results.rows.push(newRow);
					}
				}

				console.log("DEBUG:"+"displayTableContent D3");
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
					var str = "";
					var colspan = 1;
					if (rollups) {
						var levelId = (this.parentNode!= null ? parseInt(this.parentNode.__data__.v[0]): null);
						if ((levelId >= 0)) {
							colspan = me.getColspanValue(me.firstMeasure, levelId);
						}
						if ((i === 1 && levelId === 1)) {
							// this is a total line
							this.parentNode.className = "group";
						}
						if (i === 0) {
							// hide grouping column
							str = "hide";
						} else if ((rollupSummaryIndex !== null) && (i === rollupColIndex)) {
							// hide rollup column
							str = "hide";
						} else if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
							if (levelId === 1) {
								// this is a total (grouped) line
								this.parentNode.className = "group";
							}
							if (levelId >= 1) {
								// this is a rollup sub level line
								str = "new-category";
							}
						} else if (levelId >= 1) {
							// this is a rollup sub level line
							str = "new-category";
						} else if ((levelId === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
							// detect total column
							this.parentNode.className = "total-column";
						}
						if (colspan > 1 && i === rollupSummaryIndex) {
							//set the correct colspan to the rollup column
							this.colSpan = colspan;
						} else if ((levelId >= 0) && i > rollupSummaryIndex && i < me.firstMeasure) {
							//Remove the cell if part of the colspan
							this.remove();
						}
					}
					if (me.compareCols) {
						if (me.compareCols.indexOf(i) > -1) {
							str += " compareTo";
						} else if (me.metricCols.indexOf(i) > -1) {
							str += " current";
						}
					}
					if (me.metricCols) {
						if (me.metricCols.indexOf(i) === -1 && me.compareCols.indexOf(i) === -1 && me.dateCols.indexOf(i) === -1) {
							if (me.model.get("results") && me.model.get("results").cols[i] && me.model.get("results").cols[i].extendedType) {
								if (me.model.get("results").cols[i].extendedType.name !== "date" && me.model.get("results").cols[i].extendedType.name !== "timestamp") {
									str += " dimension";
								}
							}
						} else {
							str += " measure";
						}
					}
					return str;
				})
				.text(function(d, i) {
					var text = d;
					var offset = 0;
					if (this.parentNode && this.parentNode.className === "group" && me.firstMeasure !== -1 && i>=me.firstMeasure - me.metricCols.length) {
						//offset = me.metricCols.length;
						if (offset<0) {
							offset=0;
						}
					}
					var rolCol;
					if (rollups) {
						var levelId = (this.parentNode!= null ? parseInt(this.parentNode.__data__.v[0]): null);
						if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
							if (levelId >= 1) {
								rolCol = rollupColIndex;
								text = "";
								if (levelId > 1) {
									rolCol = rollups[Math.min(rollups.length-1,levelId-1)].col + 1;
									text = "Total for ";
								}
								if (levelId <=rollups.length) { 
									text = text + this.parentNode.__data__.v[rolCol];
								} else {
									text = text + this.parentNode.__data__.v[i];
								}
							} else if ((levelId === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
								text = "Grant Total";
							}
						} else if (i === 1){
							rolCol = rollupColIndex;
							if (levelId >= 1) {
								if (levelId > 1) {
									rolCol = rollups[Math.min(rollups.length-1,levelId-1)].col + 1;
								}
								// this is a total line
								text = "Total for "+data.results.cols[rolCol].name;
							}
						} else  if (i === 2) {
							if ((levelId === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
								text = "Grant Total";
							}
						} else if (this.parentNode && levelId === 1) {
							if (i >= me.firstMeasure && me.model.get("hideRollupTotal") === true) {
								text = "";
							}
						}
					} else if (offset>0) {
						text = this.parentNode.__data__.v[i - offset];
					}
					return text;
				});

				if (results.totalSize>0) {
					// display total
					this.$el.find("#no-data").hide();
					var resultsInfo = "Showing "+(results.startIndex + 1) + " - " + (results.startIndex + data.results.rows.length)+" of "+results.totalSize+" entries";
                    if (typeof $.i18n !== "undefined") {
                    	resultsInfo=$.i18n.t("table-results-size", {"results":(results.startIndex + 1) + " - " + (results.startIndex + data.results.rows.length),"total":results.totalSize});
                    }
					this.$el.find("#total-msg").html(resultsInfo);
					this.$el.find("#total").show();
				} else {
					this.$el.find("#total").hide();
					this.$el.find("#no-data").show();
				} 
				if (typeof $.i18n !== "undefined") {
					this.$el.localize();
				}
			}
		},

		getColspanValue: function(firstMeasurePosition, rollupLevel) {
			if (rollupLevel >= 0 && firstMeasurePosition >= 3) {
				return firstMeasurePosition - 2;
			} else {
				return 1;
			}
		},

		renderBaseViewPort : function() {
			this.$el.html(this.template({
				"staleMessage" : this.staleMessage,
				"reRunMessage" : this.reRunMessage
			}));
			this.$el.find("#total").hide();
			this.$el.find("#no-data").hide();
			this.$el.find(".sq-loading").hide();
			if (this.paging) {
				this.paginationView = new squid_api.view.PaginationView( {
					model : this.model,
					config : this.config,
					el : this.$el.find("#pagination")
				});
				this.paginationView.render();
			}
		},

		show: function() {
			this.$el.show();
		},

		hide: function() {
			this.$el.hide();
		},

		render : function() {
			if (this.el) {
				var selector = "#"+this.el.id+" .sq-table";
				var me = this;
				this.currentDomain = this.config.get("domain");
				var parentId = this.config.get("domain");
	            if (typeof $.i18n !== "undefined") {
					this.noDataMessage = $.i18n.t("noDataMessage");
					this.staleMessage = $.i18n.t("staleMessage");
					this.reRunMessage = $.i18n.t("reRunMessage");
	            }

				squid_api.getCustomer().then(function(customer) {
					customer.get("projects").load(me.config.get("project")).then(function(project) {
						project.get("domains").load(parentId).then(function(domain) {
							if (domain.get("metrics")) {
								domain.get("metrics").load().then(function(metrics) {
									// display table header
									var arr = [];
									for(i=0; i<metrics.size(); i++) {
										arr.push(metrics.models[i].toJSON());
									}
									me.displayTableHeader(selector, arr);

									if (me.model.get("status") === "DONE") {
										me.$el.find("#total").show();
										me.$el.find(".sq-loading").hide();
										me.$el.find("#stale").hide();
										me.$el.find("#re-run").hide();
										me.$el.find(".sort-direction").show();
										me.$el.find("#table-container").show();

										if (!me.model.get("error")) {
											// display results
											me.displayTableContent(selector);
											if (me.paging) {
												me.paginationView.render();
												me.$el.find("#pagination").show();
											}
											me.$el.find("#error").html("");
										} else {
											var analysis = me.model;
											// in case of a multi-analysis model
											if (analysis.get("analyses")) {
												analysis = analysis.get("analyses")[0];
											}
											me.$el.find("#error").html("<div id='error'>" + me.model.get("error").message + "</div>");
										}
									}

									if (me.model.get("status") === "RUNNING") {
										// computing in progress
										me.$el.find(".sq-loading").show();
										me.$el.find("#stale").hide();
										me.$el.find(".sort-direction").show();
										me.$el.find("#error").html("");
										me.$el.find("#table-container").hide();
									}

									if (me.model.get("status") === "PENDING") {
										// refresh needed
										d3.select(selector).select("tbody").selectAll("tr").remove();
										me.$el.find("#pagination").hide();
										me.$el.find("#total").hide();
										me.$el.find(".sq-loading").hide();
										me.$el.find("#stale").show();
										me.$el.find("#error").html("");
										me.$el.find("#table-container").show();
										me.$el.find("#re-run").hide();
									}
								});
							}
						});
					});
				});
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
        dimension: null,
        domain: null,

        loadChosenDimensions: function(chosenDimensions) {
			var dfd = new $.Deferred();
			var chosenDimensionsCopy = chosenDimensions;
			var me = this;
			if (chosenDimensionsCopy) {
                squid_api.getCustomer().then(function(customer) {
                    customer.get("projects").load(me.config.get("project")).then(function(project) {
                    	var dimensions = [];
	                    for (var j=0; j<chosenDimensionsCopy.length; j++) {
	                        var dimensionflatten =  chosenDimensionsCopy[j];
	                        var dimension;
	                        me.dimension = dimensionflatten.replace(/.*'([^']+)'/, "$1");
	                        me.domain = dimensionflatten.replace(/.*'([^']+)'\.@'[^']+'$/, "$1");
	                        me.dimensionflatten = dimensionflatten;
	                        if (dimensionflatten.startsWith("@'"+me.domain+"'") === false) {
	    	                	dimension = me.loadDimensionFromRelation(project, me.domain, me.dimension);
	    	                	$.when(dimension).done(function(dimension) {
		    	               		dimensions.push(dimension);
		    	                	if (dimensions.length === chosenDimensionsCopy.length) {
		    	        				dfd.resolve(dimensions);
		    	                	}    	 
	    	                	});
	    	                } else {
	    	                	dimension = me.loadDimensionFromDomain(project, me.domain, me.dimension);
	    	                	$.when(dimension).done(function(dimension) {
		    	               		dimensions.push(dimension);
		    	                	if (dimensions.length === chosenDimensionsCopy.length) {
		    	        				dfd.resolve(dimensions);
		    	                	}    	 
	    	                	});
	    	                }
	                     }
                   });
                });
			}
			return dfd;
        },
        
        loadDimensionFromRelation: function(project, relationId, dimensionId) {
			var dfd = new $.Deferred();
        	project.get("relations").load(relationId).then(function(relation) {
        		project.get("domains").load(relation.get("rightId").domainId).then(function(domain) {
        			domain.get("dimensions").load(dimensionId).then(function(dimension) {
        				dfd.resolve(dimension);
                    });
                });
            });
        	return dfd;
        },
       
        loadDimensionFromDomain: function(project, domainId, dimensionId) {
			var dfd = new $.Deferred();
            project.get("domains").load(domainId).then(function(domain) {
            	domain.get("dimensions").load(dimensionId).then(function(dimension) {
    				dfd.resolve(dimension);
                });
            });
        	return dfd;
        },
        
        refreshAnalysis : function(silent) {
            var changed = false;
            var a = this.analysis;
            var config = this.config;
            if (this.config.hasChanged("timeUnit")) {
            	a.setParameter("force", true); 
            } else {
           	 	a.setParameter("force", false); 
            }
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
            var me = this;
            var chosenDimensions = config.get("chosenDimensions");
            var dimensions = this.loadChosenDimensions(chosenDimensions);
            var indexToRemoveFromChosen = null;
            $.when(dimensions).done(function(dimensions)  {
                if (selection) {
                    var dateFound = false;
                    var id = config.get("period")[config.get("domain")];
                    if (dimensions) {
                        for (var j=0; j<dimensions.length; j++) {
                          	var expression = dimensions[j].get("expression");
                        	if (dimensions[j].get("oid") === id.replace(/.*'([^']+)'/, "$1")) {
                        		dateFound = true;
                        		indexToRemoveFromChosen = j;
                        	} else if (Array.isArray(expression.references)) {
                        		if (expression.references.length === 1) {
                        			if (expression.references[0].reference.dimensionId === id.replace(/.*'([^']+)'/, "$1")) {
                        				dateFound = true;
                                		indexToRemoveFromChosen = j;
                        			}
                        		}
                        	}
                        }
                    }
                    //
                    me.setFacets(a, id, indexToRemoveFromChosen);
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
                    "orderBy" :  $.extend(true, [], config.get("orderBy"))
                }, {
                    "silent" : silent
                });
                //with this code, sort doesn't work anymore in data table for date columns
                /*if (indexToRemoveFromChosen || indexToRemoveFromChosen === 0) {
                	a.get("orderBy").splice(indexToRemoveFromChosen, 1);
                }*/
                changed = changed || a.hasChanged();

                if (changed === true) {
                    me.onChangeHandler(me.analysis);
                }
            });
        },

        setFacets: function(a, id, indexToRemoveFromChosen) {
            var toDate = false;
            var beyondLimit = false;
            squid_api.utils.checkAPIVersion(">=4.2.1").done(function(){
                toDate = true;
            });
            squid_api.utils.checkAPIVersion(">=4.2.5").done(function(){
                beyondLimit = true;
            });
            if (toDate) {
                var timeUnit = this.config.get("timeUnit");
                var dimensions = $.extend(true, [], this.config.get("chosenDimensions"));

                // if current date is in dimension list, remove it
                if (indexToRemoveFromChosen || indexToRemoveFromChosen === 0) {
                    dimensions.splice(indexToRemoveFromChosen, 1);
                }
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
                a.set({'beyondLimit' : [{"col" : 0}]}, {silent : true});
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
            
            if (!this.model) {
                // default model is config
                this.model = squid_api.model.config;
            }

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
		reportSelection: null,
		scheduleName: null,
		widgetAccessible: false,
		canCreate: false,
		processData: null,

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
				if (options.reportSelection) {
					this.reportSelection = options.reportSelection;
				}
				if (options.scheduleName) {
					this.scheduleName = options.scheduleName;
				}
				if (options.processData) {
					this.processData = options.processData;
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

			if (squid_api && squid_api.model && squid_api.model.login && squid_api.model.login.get("accessToken")){
				this.fetchAndRender();
			}
			// listeners
			this.listenTo(squid_api.model.login, "change:accessToken", this.fetchAndRender);
			this.listenTo(exportJobs, 'change reset sync', this.render);
		},

		events: {
			"click button": function() {
				var me=this;
				//$.when(this.fetchAndRender()).done().then(me.renderIndex());
				me.renderIndex();
			}
		},

		closeModal : function(modal) {
			this.status.unset("message");
			this.status.unset("error");
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
					"click .bslink": function (event) {
						var id = $(event.target).parents(".job-item").attr("data-attr");
						var clipboard = new Clipboard("a[title='"+id+"']"); 
						clipboard.on('success', function(e) {
							console.info('Action:', e.action);
							console.info('Text:', e.text);
							console.info('Trigger:', e.trigger);
							me.status.set("displayTime", 1000);
							me.status.set("message", "Job's id "+ id +" copied to clipboard");
						});
						clipboard.on('error', function(e) {
						    console.error('Action:', e.action);
						    console.error('Trigger:', e.trigger);
						});
					},
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
							url: url,
							success: function(response) {
								me.status.unset("message");
								me.status.unset("error");
								var level = "error";
								var message = "";
								if (typeof response.statusCode !== 'undefined' && response.statusCode === 401) {
									message = "Authorization expired, please logon again";
								} else if (typeof response.statusCode !== 'undefined' && response.statusCode !== 200) {
									message = "Schedule not running, return code is "+statusCode;
								} else {
									message = "Your report is running";
									level = "message";
								}
								me.status.set(level, message);
					        },
					        error: function(result, status) {
					        	me.status.set("error","Schedule not running, status is "+status);
					        }
						});
						me.status.set("message", "Your report is running");
					},
					"click .delete-job": function (event) {
						var id = $(event.target).parents(".job-item").attr("data-attr");
						var r = confirm("Are you sure you want to delete this schedule?");
						if (r) {
							var job = exportJobs.get(id);
							var url = me.schedulerApiUri + "/jobs/" + id + "?access_token=" + squid_api.model.login.get("accessToken");
							$.ajax({
								method: "DELETE",
								url: url,
								success: function(response) {
									me.status.unset("message");
									me.status.unset("error");
									var level = "error";
									var message = "";
									if (typeof response.statusCode !== 'undefined' && response.statusCode === 401) {
										message = "Authorization expired, please logon again";
									} else if (typeof response.statusCode !== 'undefined' && response.statusCode !== 200) {
										message = "Schedule not deleted, return code is "+statusCode;
									} else {
										message = "Schedule successfully deleted";
										level = "message";
										exportJobs.remove(job);
									}
									me.status.set(level, message);
						        },
						        error: function(result, status) {
						        	me.status.set("error","Schedule not deleted, status is "+status);
						        }
							});
						}
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
							job.nextExecutionDate = moment(job.nextExecutionDate).format("YYYY-MM-DD");
						}
						job.scheduling.frequency = job.scheduling.frequency.replace(/s$/,"");
						jsonData.jobs.push(job);
					}
					this.$el.html(this.template(jsonData));

					this.$el.find(".table").DataTable({
				        "paging": (jsonData.jobs && jsonData.jobs.length>5)? true: false,
				        "pageLength": 5,
						"language": {
							"searchPlaceholder": "Search all fields incl. Schedule Id",
							"emptyTable": "No report is currently scheduled"
						},
						"autoWidth":true
					});
					if (me.canCreate) {
						this.$el.find("button.create-job").prop('disabled', false);
					} else {
						this.$el.find("button.create-job").prop('disabled', true);
					}
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
			Backbone.Form.validators.errMessages.required = '{{field}} is required';
			var me = this;
			this.getSchema().then(function (data) {
				var modalHeader;
				var reportName;
				if (id) {
					model = exportJobs.where({"_id": id})[0];
					reportName = model.get("reportName");
					modalHeader = "Edit " + reportName + " Scheduled Usage Report";
				} else {
					model = new ExportJobModel();
					var email = "";
					if (squid_api.model.login && squid_api.model.login.get("email")) {
						email = squid_api.model.login.get("email");
					}
					model.set({"status":{"type":"Active"}, "report":{"period":{"type":"monthly","length":"Previous month"},"format":"XLS"},"scheduling":{"frequency":"months"},"emails":[email], "nextExecutionDate":moment().add(1,"day")});
					var reportId = config.get("report");
					for (i = 0; i < widget.reports.length; i++) {
						if (widget.reports[i].oid === reportId) {
							reportName = widget.reports[i].name;
						}
					}
					modalHeader = "Create " + reportName + " Scheduled Usage Report";
				}
				if (me.processData) {
					data = me.processData(data, model);
				}
				// construct schema ignoring hidden fields
				var schema = {};
				var dateNotInPast = function (d) {
					var err = {
							type: 'nextExecutionDate',
							message: 'Next Execution Date cannot be in the past'
					};
					var now = moment().startOf('day').utc();
					var compare = moment(d).startOf('day').utc();
					if (compare < now) {
						return err;
					}
				};
				var validatePeriodAndDate = function(value, formValues) {
					var d = moment(formValues.nextExecutionDate);
					console.log(typeof(value));
					if (value instanceof Date && "Previous month" === formValues["report.period.length"] && d.date() < 3) {
						return {
							type: 'nextExecutionDate',
							message: 'Day of month must be after the 2nd'
						};
					}
				};

				var validateEmails = function(value, formValues) {
					var msg = 'Please enter at least an email';
					var re = /\S+@\S+\.\S+/;
					if (formValues.emails.length === 0) {
						return {
							type: 'emailsList',
							message: "Please define one email"
						};

					} else if (formValues.emails.indexOf(value) !== - 1) {
						var isEmail = re.test(value);
						if (!isEmail) {
							msg = "Email syntax invalid, please check";
							return {
								type: 'emailsList',
								message: msg
							};
						}
					}
				};

				for (var x in data) {
					if (widget.hiddenFields.indexOf(x) === -1) {
						schema[x] = {};
						schema[x].editorClass = "form-control";
						if ((typeof data[x].options.title !== 'undefined')) {
							schema[x].title = data[x].options.title;
						}
						if (data[x].instance === "Date") {
							schema[x].type = "Date";
							schema[x].yearStart = moment().get("year");
							schema[x].yearEnd = moment().get("year")+1;
							schema[x].validators = [dateNotInPast];
						} else if (data[x].instance === "Array") {
							schema[x].type = "List";
							schema[x].itemType = "Text";
							schema[x].addLabel = "Add Email";
							schema[x].errorMessage = "Please check Emails";
							//schema[x].template = _.template('<div><div data-items></div><button type="button" data-action="add">Add Email</button></div>', null, Backbone.Form.templateSettings);
							schema[x].itemTemplate = _.template('<div><span data-editor></span><button type="button" data-action="remove"><i class="fa fa-trash-o"></i></button></div>', null, Backbone.Form.templateSettings);
							schema[x].validators = [validateEmails];
						} else {
							if (data[x].options.enumValues) {
								schema[x].type = "Select";
								schema[x].options = data[x].options.enumValues;
								schema[x].validators = ['required'];
							} else if (data[x].options.enum) {
								
								schema[x].type = "Select";
								schema[x].options = data[x].options.enum;
								schema[x].validators = ['required'];
							} else {
								schema[x].type = "Text";
							}
						}
						if (schema[x].title === "Usage Period:" || schema[x].title === "Next Execution Date:") {
							schema[x].validators.push(validatePeriodAndDate);
						}
					}
				}

				widget.formContent = new Backbone.Form({
					schema: schema,
					model: model,
					idPrefix: null,
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
					var errors = widget.formContent.commit({ validate: true });
					var emails = widget.formContent.getValue().emails; //Return an array with [old,values,new,values]
					if (typeof emails !== 'undefined' && emails.length>0) {
						// Take the new values assuming no deletion
						emails = widget.formContent.getValue().emails.slice((((widget.formContent.getValue().emails.length - 1) / 2) + 1), widget.formContent.getValue().emails.length);
						// computing the separator old new values using the first old value.
						if (widget.formContent.getValue().emails.lastIndexOf(widget.formContent.getValue().emails[0]) > 0) {
							emails = widget.formContent.getValue().emails.slice(widget.formContent.getValue().emails.lastIndexOf(widget.formContent.getValue().emails[0]), widget.formContent.getValue().emails.length);
						}
					}

					if (typeof errors === 'undefined' && emails.length>0) {
						var values = widget.formContent.getValue();
						// manipulate data
						values.customerId = squid_api.model.customer.get("id");
						values.userId = squid_api.model.login.get("oid");

						values.emails = emails;

						if (id) {
							// EDIT aka PUT /jobs/:id
							var job = exportJobs.get(id);
							job.attributes.emails = values.emails;
							job.unset("errors",{silent: true});
							job.set(values, {silent: false});
							job.save({}, {
								success: function(model) {
									me.status.unset("message");
									me.status.unset("error");
									var msg = "";
									var level ="error";
									var statusCode = model.get("statusCode");
									var statusJob = model.get("status");
									if (model.get("errors")) {
										var errors = model.get("errors");
										var sep = "";
										for (var x=0; x<errors.length; x++) {
											if (errors[x].message) {
												msg = msg + errors[x].message + sep;
											}
											sep = "<br>";
										}
										me.status.set("error", msg);
									} else if (typeof statusCode !== 'undefined' && statusCode === 401) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Authorization expired, please logon again";
									} else if (typeof statusCode !== 'undefined' && statusCode !== 200) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not updated, return code is "+statusCode;
									} else if (statusJob !== null && (statusJob.type === "Active" || statusJob.type === "Suspended")) {
										exportJobs.add(model);
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule successfully modified";
										level = "message";
									} else {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not updated, status code is "+statusJob;
									}
									me.status.set(level, msg);
								}
							});
						} else {
							// CREATE aka POST /jobs/

							var config = squid_api.model.config.toJSON();
							values.state = config;

							// Getting the accountID (shared code with PQ Counter)
							values.projectId = config.project;
							values.bookmarkId = config.bookmark;
							values.reportId = config.report; //Legacy
							values.reportName = config.report;
							for (ix = 0; ix < me.reports.length; ix++) {
								if (me.reports[ix].oid === config.report) {
									values.scheduleName = me.reports[ix].name;
								}
							}
							values.reportSelection = me.reportSelection(config);
							values.scheduleName = me.scheduleName(config);

							var newJob = new ExportJobModel(values);
							newJob.save({}, {
								success: function (model) {
									me.status.unset("message");
									me.status.unset("error");
									var msg = "";
									var level ="error";
									var statusCode = model.get("statusCode");
									var statusJob = model.get("status");
									if (model.get("errors")) {
										var errors = model.get("errors");
										var sep = "";
										for (var x=0; x<errors.length; x++) {
											if (errors[x].message) {
												msg = msg + errors[x].message + sep;
											}
											sep = "<br>";
										}
										me.status.set("error", msg);
									} else if (typeof statusCode !== 'undefined' && statusCode === 401) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Authorization expired, please logon again";
									} else if (typeof statusCode !== 'undefined' && statusCode !== 200) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not created, return code is "+statusCode;
									} else if (statusJob !== null && (statusJob.type === "Active" || statusJob.type === "Suspended")) {
										exportJobs.add(model);
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule successfully created";
										level = "message";
									} else {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not created, status code is "+statusJob;
									}
									me.status.set(level, msg);
								}
							});
						}
					} else if (emails.length === 0) {
						$(formModal.el).trigger("hidden.bs.modal");
					}
				});

			});
		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
			/*
			//this.status.unset("message");
			// activate / disactivate button
			if (this.widgetAccessible) {
				this.$el.find("button").prop("visibility", 'visible');
			} else {
				this.$el.find("button").prop("visibility", 'visible');
			}
			 */
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
        disableCurl: false,
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
            if (options.disableCurl) {
                this.disableCurl = options.disableCurl;
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
            if (options.selectedFormatIndex) {
            	this.selectedFormatIndex = options.selectedFormatIndex;
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
                    customView: true,
                    available : "availableDimensions",
                    template : options.dimensionSelectorTemplate
                });

                // create a metricSelector
                this.metricSelector = new squid_api.view.MetricSelectorView({
                    model : this.configClone,
                    customView: true,
                    available : "availableMetrics",
                    template : options.metricSelectorTemplate
                });


                this.listenTo(this.configClone, 'change:chosenDimensions', function() {
                    // update the analysis with extra dimensions
                    me.model.setFacets(this.configClone.get("chosenDimensions"));
                });

                this.listenTo(squid_api.model.status, "change:configReady", function() {
                    if (squid_api.model.status.get("configReady") === true) {
                        me.model.setMetrics(this.configClone.get("chosenMetrics"));
                    }
                });

                this.listenTo(this.configClone, 'change:chosenMetrics', function() {
                    // update the analysis with extra metrics
                    if (squid_api.model.status.get("configReady") === true) {
                        me.model.setMetrics(this.configClone.get("chosenMetrics"));
                    }
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

        updateFormats : function(formats) {
        	this.formats = formats;
        },

        clickedFormat : function (event) {
            var t = event.target;
            this.selectedFormatIndex = null;
            for (var i=0; i<this.formats.length;i++) {
                if (this.formats[i].format === t.value) {
                    this.selectedFormatIndex = i;
                } else if (this.formats[i].selected === true){
                	this.formats[i].selected = false;
                }
            }
            var input = $(this.viewPort).find('input[name="compression"]');
            if (t.value === "xlsx") {
            	input.parent().hide();
            	this.compression = false;
            } else {
            	input.parent().show();
            	if (input.length>0) {
            		this.compression = (input[0].checked);
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
                    if (me.model.get("templateData").options.xmlType &&
                        selectedFormat.template[me.model.get("templateData").options.xmlType]) {
                        velocityTemplate = selectedFormat.template[me.model.get("templateData").options.xmlType](me.model.get("templateData"));
                    } else {
                        velocityTemplate = selectedFormat.template(me.model.get("templateData"));
                    }
                } else {
                    velocityTemplate = selectedFormat.template(me.model.get("templateData"));
                }
                postMethod = "POST";
            }
            if (me.compression && !velocityTemplate) {
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
            downloadForm.attr("accept-charset","UTF-8");
            downloadForm.empty();
            downloadForm.append("<input type='hidden' name='access_token' value='"+analysisJobResults.getParameter("access_token")+"'/>");
            downloadForm.append("<input type='hidden' name='compression' value='"+analysisJobResults.getParameter("compression")+"'/>");
            if (velocityTemplate) {
                downloadForm.append("<input type='hidden' name='template' value='"+base64.encode(encodeURIComponent(velocityTemplate))+"'/>");
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

            if (! this.disableCurl || this.viewPort.is(":empty")) {
                $(this.viewPort).html(this.template({
                    "displayInAccordion" : this.displayInAccordion,
                    "downloadButtonLabel" : this.downloadButtonLabel,
                    "displayInPopup" : this.displayInPopup,
                    "sqlView" : this.sqlView,
                    "materializeDatasetsView" : this.materializeDatasetsView,
                    "data-target" : this.renderTo,
                    "formats": formatsDisplay,
                    "displayCompression" : (this.displayCompression),
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
                    "metricSelectorEnabled" : this.metricSelectorEnabled,
                    "analysisConfigurationEnabled" : this.analysisConfigurationEnabled
                    })
                );

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
            }

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
                    me.trigger("change:format");
                });
            $(this.viewPort).find('[name="compression"]')
            .click(function(event) {
                me.clickedCompression(event);
            });

            if (selectedFormat.format === "xlsx") {
            	$(this.viewPort).find('input[name="compression"]').parent().hide();
            	this.compression = false;
            } else {
            	$(this.viewPort).find('input[name="compression"]').parent().show();
            	//this.compression = (t.checked);
            }

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
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
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
        autoInit: null,
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
                if (options.autoInit) {
                    this.autoInit = options.autoInit;
                }
            }

            // check for new filter selection made by config update
            this.listenTo(this.config, 'change:selection', this.initFilters);

            if (this.autoInit) {
                this.initFilters();
            }
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
                            if (facet.dimension.valueType === "DATE") {
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
                    if (timeFacets[i].dimension.valueType === "DATE" && timeFacets[i].dimension.type === "CONTINUOUS" && ! timeFacets[i].error) {
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
			var me = this;

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
				if (d3) {
					this.d3Formatter = d3.format(",");
				}
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
					var hasGrowth=false;

					// resolve compareTo columns
					var compareMap = {};
					var compareIdSuffix = "";
					for (var i1 = 0; i1 < cols.length; i1++) {
						var colA = cols[i1];
						if (colA.originType === "COMPARETO") {
							// key = col oid, value = compare col index
							compareMap[colA.id] = i1;
							compareIdSuffix = colA.id.endsWith("_compare")?"_compare":"";
						} else if (colA.originType === "GROWTH") {
							hasGrowth = true;
						}
					}

					// build display data
					values = results.rows[0].v;
					for (var i=0; i<cols.length; i++) {
						var col = cols[i];
						if (col.originType === "USER") {
							var kpi = {};
							kpi.value = (typeof values[i] === "number") ? this.d3Formatter(Math.round(parseFloat(values[i]) * 100) / 100) : this.format(values[i]);
							var compareIndex = compareMap[col.id+compareIdSuffix];
							if (compareIndex) {
								kpi.compareToValue = (typeof values[i] === "number") ? this.d3Formatter(Math.round(parseFloat(values[compareIndex]) * 100) / 100) : this.format(values[compareIndex]);
							}
							if (results.cols[i].extendedType) {
								var words = results.cols[i].name.split(" ");
								for (var j=0; j<words.length; j++) {
									// see if column header contains the text duration / time
									if (words[j].toLowerCase() === "duration" || words[j].toLowerCase() === "time") {
										kpi.value =  squid_api.utils.formatTime(values[i], this.d3Formatter, results.cols[i].format );
										kpi.compareToValue =  squid_api.utils.formatTime(values[compareIndex], this.d3Formatter, results.cols[i].format);
									}
								}
							}
							kpi.unit = "";
							kpi.name = col.name;
							if (hasGrowth) { 
								kpi.growth = values[compareIndex+1];
								kpi.growth = kpi.growth === null? "0":kpi.growth.replace("%","").replace(" ","");
								var localGrowth = kpi.growth;
								var idxComma = localGrowth.indexOf(",");
								var idxdot = localGrowth.indexOf(".");
								if (idxdot < idxComma && idxdot > -1) {
									localGrowth = localGrowth.replace(".","");
									localGrowth = localGrowth.replace(",",".");
								} else if (idxComma < idxdot && idxComma > -1) {
									localGrowth = localGrowth.replace(",","");
								} else if (idxComma !== -1) {
									localGrowth = localGrowth.replace(",",".");
								} 
								if (localGrowth > 0) {
									kpi.compareTextColor = 'text-success';
									kpi.compareClass = 'glyphicon-arrow-up';
								}  else if (localGrowth < 0) {
									kpi.compareTextColor = 'text-danger';
									kpi.compareClass = 'glyphicon-arrow-down';
								} else {
									kpi.growth = 0;
									kpi.compareTextColor = 'text-info';
									kpi.compareClass = 'glyphicon-transfer';
								}                            	
							} else if (typeof kpi.compareToValue !== "undefined" && kpi.compareToValue !== null) {
								var lvalue = parseFloat(values[i]);
								var rvalue = parseFloat(values[compareIndex]);
								if (typeof values[i] === 'string' || values[i] instanceof String) {
									lvalue = parseFloat(values[i].replace(new RegExp(',', 'g'),''));
									if (values[compareIndex] !== null) {
										rvalue = parseFloat(values[compareIndex].replace(new RegExp(',', 'g'),''));
									}
								}
								if (values[compareIndex] !== null) {
									kpi.growth = (((lvalue - rvalue) / rvalue) * 100).toFixed(2);
								}
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
			if (typeof $.i18n !== "undefined") {
				this.$el.localize();
			}
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

        infovirtualize: function () {
            //if ($(this.viewPort).find('.squid-api-materialize-panel-popup')) {
            $(this.viewPort).find('[data-toggle="materialize-virtualize-tooltip"]').tooltip('enable');
            $(this.viewPort).find('[data-toggle="materialize-virtualize-tooltip"]').tooltip();

            //}
        },

        deinfovirtualize: function () {
            $(this.viewPort).find('[data-toggle="materialize-virtualize-tooltip"]').tooltip('disable');
        },

        infomaterialize: function () {
            //if ($(this.viewPort).find('.squid-api-materialize-panel-popup')) {
            $(this.viewPort).find('[data-toggle="materialize-materialize-tooltip"]').tooltip('enable');
            $(this.viewPort).find('[data-toggle="materialize-materialize-tooltip"]').tooltip();

            //}
        },

        deinfomaterialize: function () {
            $(this.viewPort).find('[data-toggle="materialize-materialize-tooltip"]').tooltip('disable');
        },

        infodestination: function () {
            //if ($(this.viewPort).find('.squid-api-materialize-panel-popup')) {
            this.popup.find("#materialize-destination-tooltip").tooltip('enable');
            this.popup.find("#materialize-destination-tooltip").tooltip();
            //$(this.viewPort).find('[data-toggle="materialize-destination-tooltip"]').tooltip();
            //}
        },

        infodataset: function () {
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
            var me = this, dfModal;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

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

            dfModal = new squid_api.view.ModalView({
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
    root.squid_api.view.ModelInfoView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_modelinfo_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        template: template,
        descriptionAvailable: false,
        popoverOptions: {
            placement: function (context, source) {
                var position = $(source).offset();

                if (position.left > 515) {
                    return "left";
                }

                if (position.left < 515) {
                    return "right";
                }

                if (position.top < 110){
                    return "bottom";
                }

                return "top";
            },
            html: true,
            container: 'body'
        },
        internalTemplate: null,

        initialize: function() {
            var me = this;
            this.config = squid_api.model.config;
            this.filters = squid_api.model.filters;
            this.status = squid_api.model.status;

            this.internalTemplate = squid_api.template.squid_api_modelinfo_internal_widget;

            this.config.on("change:bookmark", function() {
                me.descriptionAvailable = false;
            });
            this.config.on("change:domain", this.fetchMetrics, this);
            this.filters.on("change:selection", this.render, this);
            this.status.on("change:status", this.statusUpdate, this);
            this.status.on("change:configReady", this.statusUpdate, this);

            /* close popover when clicked outside */
            $('body').on('click', function (e) {
                me.$el.find("[data-toggle='popover']").each(function() {
                    //the 'is' for buttons that trigger popups
                    //the 'has' for icons within a button that triggers a popup
                    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                        $(this).popover('hide');
                    }
                });
            });
        },

        statusUpdate: function() {
            if (this.status.get("status") === "RUNNING" || this.status.get("configReady") === false) {
                this.$el.find("button").attr("disabled", true);
            } else {
                this.$el.find("button").attr("disabled", false);
            }
        },

        getMetrics: function() {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(me.config.get("domain")).then(function(domain) {
                        return domain.get("metrics").load();
                    });
                });
            });
        },

        fetchMetrics: function() {
            var me = this;

            var domain = this.config.get("domain");

            var chosenMetrics = this.config.get("chosenMetrics") || [];
            var availableMetrics = this.config.get("availableMetrics") || [];

            if (domain) {
                // get domain dimensions & metrics
                $.when(this.getMetrics()).done(function ( metrics ) {
                    me.metrics = [];

                    // store metrics
                    for (var m=0; m<metrics.length; m++) {
                        var mId = metrics.at(m).get("oid");
                        if (chosenMetrics.indexOf(mId) > -1 || availableMetrics.indexOf(mId) > -1) {
                            me.metrics.push({
                                "name": metrics.at(m).get("name"),
                                "description": metrics.at(m).get("description")
                            });
                            if (metrics.at(m).get("description")) {
                                me.descriptionAvailable = true;
                            }
                        }
                    }
                    me.render();
                });
            }
        },

        getDimensions: function() {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(me.config.get("domain")).then(function(domain) {
                        return domain.get("dimensions").load();
                    });
                });
            });
        },

        render: function() {
            var me = this;
            var domain = this.config.get("domain");
            var selection = this.filters.get("selection");

            var availableDimensions = this.config.get("availableDimensions") || [];
            var chosenDimensions = this.config.get("chosenDimensions") || [];

            if (domain) {
                if (selection) {
                    var facets = selection.facets;
                    if (facets) {
                        this.dimensions = [];
                        for (var f=0; f<facets.length; f++) {
                            var fId = facets[f].id;
                            if (chosenDimensions.indexOf(fId) > -1 || availableDimensions.indexOf(fId) > -1) {
                                this.dimensions.push({
                                    "name": facets[f].name,
                                    "description": facets[f].dimension.description
                                });
                                if (facets[f].dimension.description) {
                                    this.descriptionAvailable = true;
                                }
                            }
                        }

                        // sort dimensions
                        if (this.dimensions) {
                            this.dimensions.sort(function(a, b){
                                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                                    return -1;
                                }
                                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            });
                        }

                        // sort metrics
                        if (this.metrics) {
                            this.metrics.sort(function(a, b){
                                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                                    return -1;
                                }
                                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            });
                        }
                        var dimensionsLabel="Dimensions";
                        var metricsLabel="Metrics";
                        var nameLabel="Name";
                        var descriptionLabel="Description";

                        if (typeof $.i18n !== "undefined") {
                            dimensionsLabel=$.i18n.t("dimensions");
                            metricsLabel=$.i18n.t("metrics");
                            nameLabel=$.i18n.t("name");
                            descriptionLabel=$.i18n.t("description");
                        }

                        var jsonData = {
                            dimensions: this.dimensions,
                            metrics: this.metrics,
                            dimensionsLabel: dimensionsLabel,
                            metricsLabel: metricsLabel,
                            nameLabel: nameLabel,
                            descriptionLabel: descriptionLabel
                        };

                        if (me.descriptionAvailable) {
                            // print base template
                            this.$el.html(this.template());

                            // set popup html content
                            me.popoverOptions.content = me.internalTemplate(jsonData);

                            // initialize popover
                            me.$el.find("[data-toggle='popover']").popover(me.popoverOptions);

                            // remove max-width
                            me.$el.find("[data-toggle='popover']").on("show.bs.popover", function(){
                                me.$el.find("[data-toggle='popover']").data("bs.popover").tip().css({"max-width": "inherit"});
                            });
                            me.$el.find("[data-toggle='popover']").on("hidden.bs.popover", function(e){
                                // prevent clicking twice to open bootstrap popover
                            	var inStateClick = $(e.target).data("bs.popover");
                                if (inStateClick && inStateClick.inState && inStateClick.inState.click) {
                                	inStateClick.inState.click = false;
                                }
                            });

                        } else {
                            this.$el.empty();
                        }
                    }
                }

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
                me.projectName = project.get("id").projectId;
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
                me.projectName = project.get("id").projectId;
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
                me.projectName = project.get("id").projectId;
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
                     analysisJobResults.setParameter("template", base64.encode(encodeURIComponent(velocityTemplate)));
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
                for (i=0; i<selection.facets.length; i++) {
                    var facet = selection.facets[i];
                    var chosenDimensions = config.get("chosenDimensions");
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
        colorPaletteCompare: null,
        interpolationRange: null,
        yearSwitcherView: null,
        multiSeries: null,
        height: 400,
        staleMessage : "Click refresh to update",
        renderTo: ".squid-api-data-widgets-timeseries-widget #widget",
        renderLegend: ".squid-api-data-widgets-timeseries-widget #legend",
        reRunMessage: "Please manually refresh your analysis",
        fillMissingDataValues: null,
        timeUnitSelector: null,
        legendState: {},

        initialize : function(options) {
            var me = this;
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
                if (options.colorPaletteCompare) {
                    this.colorPaletteCompare = options.colorPaletteCompare;
                } else {
                    this.colorPaletteCompare = d3.scale.category20().range();
                }
                if (options.timeUnits) {
                    this.timeUnits = options.timeUnits;
                } else {
                    this.timeUnits = [{
                        id: "TO_DATE",
                        i18n: "daily",
                        name: "Daily"
                    },
                    {
                        id: "WEEKLY",
                        i18n: "weekly",
                        name: "Weekly"
                    }, {
                        id: "MONTHLY",
                        i18n: "monthly",
                        name: "Monthly"
                    }, {
                        id: "YEARLY",
                        i18n: "yearly",
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
                if (options.fillMissingDataValues) {
                    this.fillMissingDataValues = options.fillMissingDataValues;
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
                this.defaultConfiguration = options.configuration;
            } else {
                this.defaultConfiguration = {
                    interpolate: "basic",
                    right: 80,
                    height: this.height,
                    target: this.renderTo,
                    x_accessor: 'date',
                    area: false,
                    y_accessor: 'value',
                    animate_on_load: false,
                    missing_is_hidden: true,
                    missing_is_hidden_accessor: 'dead',
                    legend_target: this.renderLegend,
                    colors: this.colorPalette,
                    after_brushing: function(brush) {
                        var div = $(this).parent().siblings("#brushing");
                        if (brush.min_x !== brush.max_x) {
                            div.show();
                        } else {
                            div.hide();
                        }
                    },
                    mouseover: function(d, i) {
                        // remove existing active data point text el
                        d3.select(this.target + " .mg-active-datapoint").remove();
                        d3.select(this.target + " .mg-active-datapoint-container text").remove();

                        var values = d.values;
                        if (! values) {
                            values = [d];
                        }

                        // append current hovered date
                        $(this.target).parents().find("#legend").find(".date").remove();
                        $(this.target).parents().find("#legend").prepend("<span class='date'>" + moment(values[0].date).format("L") + "</span>");

                        for (i=0; i<values.length; i++) {
                            var line = this.legend[values[i].line_id - 1];
                            // find legend item
                            var legendItems = $(this.legend_target + " span");
                            for (ix=0; ix<legendItems.length; ix++) {
                                if ($(legendItems[ix]).text().indexOf(line) > -1) {
                                    $(legendItems[ix]).find(".value").remove();
                                    $(legendItems[ix]).append("<span class='value'>" + me.format(values[i].value) + "</span> ");
                                }
                            }
                        }
                    },
                    mouseout: function() {
                        $(this.target).parents().find("#legend").find(".date").remove();
                        d3.select(".mg-active-datapoint-container").selectAll("*").remove();
                        $(this.legend_target + " span .value").remove();
                    }
                };
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.f");
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
            },
            "click #brushing a" : "render"
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
            if (configDisplay && ! this.model.get("disabled") && this.configuration) {
                if (! configDisplay.visible) {
                    this.configuration.height+=configDisplay.originalHeight;
                } else {
                    this.configuration.height = this.height;
                }
                MG.data_graphic(this.configuration);
            }
        },

        updateWidth: function() {
            if (! this.model.get("disabled") && this.configuration) {
                this.configuration.width = $(this.renderTo).width();
                MG.data_graphic(this.configuration);
            }
        },

        standardizeData: function(currentDateIndex) {
            // standardize data
            for (i=0; i<this.results.rows.length; i++) {
                // store date
                if (! currentDateIndex) {
                    var v = [this.results.rows[i].v[0]];
                    var dim = "";
                    var metricVals = [];
                    for (ix=1; ix<this.results.rows[i].v.length; ix++) {
                    	if (this.results.cols[ix].role === "DOMAIN" && this.results.rows[i].v[ix]) {
                            if (dim.length === 0) {
                                dim += this.results.rows[i].v[ix];
                            } else {
                                dim += " / " + this.results.rows[i].v[ix];
                            }
                        } else if (this.results.cols[ix].role === "DATA" || this.results.rows[i].v[ix] === null) {
                            metricVals.push(this.results.rows[i].v[ix]);
                        }
                    }
                    v.push(dim);
                    for (ix1=0; ix1<metricVals.length; ix1++) {
                        v.push(metricVals[ix1]);
                    }
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

            // reset configuration to default (if previous svg has been brushed)
            this.configuration = _.clone(this.defaultConfiguration);

            // for manipulation time
            var start = new Date().getTime();

            // data for timeseries
            var legend = [];
            var dataset = [];
            var nVariate = false;
            var compare = false;
            var toRemove = [];

            if (this.results && this.results.cols) {
	            // see if multiple dimensions exist
	            for (var col=1; col<this.results.cols.length; col++) {
	                if (this.results.cols[col].role === "DOMAIN") {
	                    nVariate = true;
	                    var selection = this.config.get("selection");
	                    if (selection) {
	                        var facets = selection.facets;
	                        for (var f=0; f<facets.length; f++) {
	                            if (facets[f].id === this.results.cols[col].definition && this.results.cols[col].extendedType.name === "DATE") {
	                                nVariate = false;
	                                this.standardizeData(col);
	                            }
	                        }
	                    }
	                }
	                // if metrics are present, filter the display data
	                if (metrics) {
	                    if (! metrics.includes(this.results.cols[col].id)) {
	                        toRemove.push(col);
	                    }
	                }
	            }
	
	            if (nVariate) {
	                // make sure we only have three columns
	                this.standardizeData();
	                // show metrics
	                this.$el.find("#metrics").show();
	            } else {
	                this.$el.find("#metrics").hide();
	                this.sortDates(this.results.rows);
	            }
	
	            // get data
	            var hashMap = {};
	
	            for (i=1; i<this.results.cols.length; i++) {
	                if (! toRemove.includes(i)) {
	
	                    if (nVariate) {
	                        // obtain legend names from results
	                        for (ix1=0; ix1<this.results.rows.length; ix1++) {
	                            if (this.results.rows[ix1].v[1] !== null) {
	                                if ($.inArray(this.results.rows[ix1].v[1], legend) < 0) {
	                                    // store unique legend items
	                                    legend.push(this.results.rows[ix1].v[1]);
	                                }
	                                // create hashMap
	                                var i1 = this.results.rows[ix1].v[0];
	                                var i2 = this.results.rows[ix1].v[1];
	                                var i3 = this.results.rows[ix1].v[2];
	                                var i4 = this.results.rows[ix1].v[3];
	                                if (hashMap[i2]) {
	                                    hashMap[i2][i1] = i3;
	                                } else {
	                                    hashMap[i2] = {};
	                                    hashMap[i2][i1] = i3;
	                                }
	                                if (i4) {
	                                    compare = true;
	                                    // if compare exists
	                                    if (hashMap[i2 + " (compare)"]) {
	                                        hashMap[i2 + " (compare)"][i1] = i4;
	                                    } else {
	                                        hashMap[i2 + " (compare)"] = {};
	                                        hashMap[i2 + " (compare)"][i1] = i4;
	                                        // store unique compare legend items
	                                        legend.push(i2 + " (compare)");
	                                    }
	                                }
	                            }
	                        }
	                    } else {
	                        if (this.results.cols[i].originType === "COMPARETO") {
	                            compare = true;
	                        }
	                        legend.push(this.results.cols[i].name);
	                    }
	                }
	            }
	
	            if (compare) {
	                this.configuration.colors = this.colorPaletteCompare;
	            } else {
	                this.configuration.colors = this.colorPalette;
	            }
	
	            var arr = [];
	            if (nVariate) {
	                var keys = [];
	                for (var key in hashMap) {
	                    if (hashMap.hasOwnProperty(key)) {
	                        keys.push(key);
	                    }
	                }
	                for (i=0; i<keys.length; i++) {
	                    arr = [];
	                    for (var date in hashMap[keys[i]]) {
	                        /*jshint forin: false */
	                        var obj1 = {
	                            "date" : date,
	                            "value": hashMap[keys[i]][date]
	                        };
	                        arr.push(obj1);
	                    }
	                    arr = MG.convert.date(arr, 'date');
	                    dataset.push(arr);
	                }
	            } else {
	                // make sure a value is available for every day (standard timeseries)
	                if (! nVariate) {
	                    for (i=1; i<this.results.cols.length; i++) {
	                        arr = [];
	                        /* Date Results */
	                        if (this.results.rows[0]) {
	                            var startDate = moment(moment(this.results.rows[0].v[0]).format('YYYY-MM-DD'));
	                            var endDate = moment(moment(this.results.rows[this.results.rows.length - 1].v[0]).format('YYYY-MM-DD'));
	                            for (var currentDay = startDate; currentDay.isAfter(endDate) === false; startDate.add('days', 1)) {
	                                if (! toRemove.includes(i)) {
	                                    var currentDate = currentDay.format('YYYY-MM-DD');
	                                    var dataExists = false;
	                                    var obj = {
	                                        "date" : currentDate
	                                    };
	                                    for (ix=0; ix<this.results.rows.length; ix++) {
	                                        if (this.results.rows[ix].v[0] === currentDate) {
	                                            dataExists = true;
	                                            obj.value = this.results.rows[ix].v[i];
	                                        }
	                                    }
	                                    if (dataExists === false && this.fillMissingDataValues) {
	                                        obj.value = null;
	                                        arr.push(obj);
	                                    } else if (dataExists) {
	                                        arr.push(obj);
	                                    }
	                                }
	                            }
	                            arr = MG.convert.date(arr, 'date');
	                            dataset.push(arr);
	                        }
	                    }
	                }
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
	            if (typeof $.i18n !== "undefined" && typeof this.configuration !== "undefined") {
					this.configuration.missing_text =  $.i18n.t("noDataMessage");
	            }

	            // reinitialize timeseries
	            MG.data_graphic(this.configuration);
            }
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
            // render metrics used for analysis
            if (typeof $.i18n !== "undefined") {
				this.staleMessage = $.i18n.t("staleMessage");
				this.reRunMessage = $.i18n.t("reRunMessage");
            }
            var metricColumns = [], i;
            var results = this.model.get("results");
            if (done && ! this.model.get("error") && results) {
                var cols = this.model.get("results").cols;
                for (i=0; i<cols.length; i++) {
                    if (cols[i].role === "DATA") {
                        metricColumns.push(cols[i].name);
                    }
                }
            }
            metricColumns = metricColumns.join(", ");
            if (typeof this.timeUnits !== "undefined" && typeof $.i18n !== "undefined") {
            	for (i=0; i<this.timeUnits.length; i++) {
            		if (typeof this.timeUnits[i].i18n !== "undefined") {
            			this.timeUnits[i].name = $.i18n.t(this.timeUnits[i].i18n);
            		}
            	}
            }
            this.$el.html(this.template({
                reRunMessage: this.reRunMessage,
                timeUnitSelector: this.timeUnitSelector,
                timeUnits: this.timeUnits,
                metricColumns: metricColumns,
                done: done
            }));
            if (this.timeUnitSelector) {
                this.updateTimeUnitSelector();
            }
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }
        },

        render : function() {
            var status = this.model.get("status");
            this.YearOverYear = this.config.get("YearOverYear");
            this.renderTemplate(false);

            if (status === "PENDING") {
                var chartChildren = this.$el.find("#chart_container").children();
                for (i=0; i<chartChildren.length; i++) {
                    if ($(chartChildren[i]).is("#re-run")) {
                        $(chartChildren[i]).show();
                    } else {
                        $(chartChildren[i]).hide();
                    }
                }
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

                if (data.done && this.model.get("error")) {
                    this.$el.find("#error").html("<div id='error'>" + this.model.get("error").message + "</div>");
                }
                this.renderGraphic();
            }
        },

        renderAdditionalView: function(view, element) {
            view.setElement(element);
            if (view.renderBase) {
                view.renderBase();
            }
            view.render();
        }
    });

    return View;
}));
