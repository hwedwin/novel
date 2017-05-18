;(function(){

'use strict';

angular.module('app.template', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('./component/agent/agent.edit.html', '<div id="agent_edit" ng-controller="agentctl_edit"><ol class="breadcrumb"><li><a href="#">Home</a></li><li><a href="#">添加代理</a></li></ol><form class="form-horizontal" style="padding-left:2rem"><div class="bs-example" style="margin:1rem">基本信息</div><div style="width:50%;margin-left:20%"><div class="form-group"><label for="myname">用户名</label><input type="text" class="form-control" id="myname" placeholder=""></div><div class="form-group"><label for="pwd">密码</label><input type="password" class="form-control" id="pwd" placeholder=""></div><div class="form-group"><label for="xname">代理名称</label><input type="text" class="form-control" id="xname" placeholder=""></div><div class="form-group"><label for="email">邮箱</label><input type="email" class="form-control" id="email" placeholder=""></div><div class="form-group"><label for="xtel">手机</label><input type="tel" class="form-control" id="xtel" placeholder=""></div></div><div class="bs-example" style="margin:1rem">抽成设置</div><div style="width:50%;margin-left:20%"><div class="form-group"><label for="xnum">抽成比例</label><input type="number" class="form-control" id="xnum" placeholder=""><p class="help-block">填写 0 到 1 之间的数字。<strong style="color:red">若用户充值 1000 元, 抽成比例为 0.7，则需要向该代理打款 1000 x 0.7 = 700 元</strong></p></div></div><div class="bs-example" style="margin:1rem">收款信息</div><div style="width:50%;margin-left:20%"><div class="form-group"><label for="xsk">收款方式</label><div id="xsk"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" ng-change="mChange()" value="card" ng-model="m"> 银行卡</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" ng-change="mChange()" value="alipay" ng-model="m"> 支付宝</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" ng-change="mChange()" value="weixin" ng-model="m"> 微信</label></div></div><div ng-show="m==\'card\'?true:false"><div class="form-group"><label><input ng-model="cg2" ng-change="cg2Cg()" type="checkbox"> 对公账户</label></div><div class="form-group" ng-show="cg2?true:false"><label for="myname2">公司名称</label><input type="text" class="form-control" id="myname2" placeholder=""></div><div class="form-group" ng-show="cg2?false:true"><label for="myname1">持卡人姓名</label><input type="text" class="form-control" id="myname1" placeholder=""></div><div class="form-group"><label for="card1">银行卡号</label><input type="text" class="form-control" id="card1" placeholder=""></div><div class="form-group"><label for="card2">开户行</label><input type="text" class="form-control" id="card2" placeholder=""></div></div><div ng-show="m==\'alipay\'?true:false"><div class="form-group"><label for="ali_pay">账号</label><input type="text" class="form-control" id="ali_pay" placeholder=""></div><div class="form-group"><label for="ali_pay_name">姓名</label><input type="text" class="form-control" id="ali_pay_name" placeholder=""></div></div><div ng-show="m==\'weixin\'?true:false"><div class="form-group"><label for="weixin">微信号</label><input type="text" class="form-control" id="weixin" placeholder=""></div><div class="form-group"><label for="weixinname">昵称</label><input type="text" class="form-control" id="weixinname" placeholder=""></div></div></div><div class="bs-example" style="margin:1rem">登记划分</div><div style="width:50%;margin-left:20%"><div class="form-group"><label for="dengji">登记</label><select class="form-control" id="dengji"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div><div class="form-group"><label for="beizu">备注</label><textarea id="beizu" class="form-control" rows="3"></textarea></div><button type="submit" class="btn btn-default">提交</button></div></form></div>');

  $templateCache.put('./component/agent/agent.html', '<div id="agent" ng-controller="agentctl"><ol class="breadcrumb"><li><a href="javascript:void;">Home</a></li><li><a href="javascript:void;">代理管理</a></li></ol><button ui-sref="warpper.views.section.agentedit" type="button" class="btn btn-primary" style="margin-bottom:15px">添加代理</button><div class="input-group search_btn"><input type="text" class="form-control" placeholder="搜索昵称" aria-describedby="basic-addon1"> <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-search" href="javascript:void"></span></span></div><uib-tabset active="active"><uib-tab index="0" heading="当前代理"><table class="table table-striped"><thead><tr><th>昵称</th><th>佣金比例</th><th>注册时间</th><th>等级</th><th>操作</th></tr></thead><tbody><tr ng-repeat="x in [1,2,3,4,5,7]"><td class="active"><span uib-dropdown on-toggle="toggled(open)"><a href id="simple-dropdownx" uib-dropdown-toggle>刮风这天</a><ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="simple-dropdownx"><li style="padding:10px"><div>用户名： 白色风车</div><br><div>昵称： 洞头在线</div><br><div>所属渠道：爱乐书城</div><br><div>渠道公众号：</div><img style="width:16rem" src="../../assets/image/promo-coverimg-03.jpg" alt=""></li></ul></span></td><td class="success">333</td><td class="warning">444</td><td class="danger"><span style="background-color:#6495ed;padding:3px;color:#fff">555</span></td><td class="info"><span uib-dropdown on-toggle="toggled(open)"><a href id="simple-dropdown" uib-dropdown-toggle>操作菜单</a><ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="simple-dropdown"><li ng-repeat="choice in items"><a href>{{choice}}</a></li></ul></span></td></tr></tbody></table></uib-tab><uib-tab index="1" heading="已禁止代理"><table class="table table-striped"><thead><tr><th>昵称</th><th>佣金比例</th><th>注册时间</th><th>等级</th><th>操作</th></tr></thead><tbody><tr><td class="active">12</td><td class="success">333</td><td class="warning">444</td><td class="danger">32323</td><td class="info">666</td></tr></tbody></table></uib-tab></uib-tabset><div class="app-pagination"><ul uib-pagination ng-change="" items-per-page="list.pageSize" num-pages="list.pageCount" total-items="list.rowCount" ng-model="pageIndex" max-size="5" boundary-links="true" rotate="true" first-text="&laquo;" last-text="&raquo;" previous-text="&lsaquo;" next-text="&rsaquo;"></ul></div></div>');

  $templateCache.put('./component/body/body.html', '<div id="body" class="clearfix"><ui-view name="aside"></ui-view><ui-view name="section"></ui-view></div>');

  $templateCache.put('./component/aside/aside.html', '<div id="aside"><div class="container-fluid"><ul class="nav nav-pills nav-stacked"><li role="presentation" ui-sref-active="active"><a ui-sref="warpper.views.section.novels"><i class="glyphicon glyphicon-list"></i> <span>图书列表</span></a></li><li role="presentation" ui-sref-active="active"><a ui-sref="warpper.views.section.promolist"><i class="glyphicon glyphicon-link"></i> <span>推广链接</span></a></li><li role="presentation"><a ui-sref="warpper.views.section.agent"><i class="glyphicon empty glyphicon glyphicon-user"></i> <span>代理管理</span></a></li><li role="presentation" ui-sref-active="active"><a ui-sref="warpper.views.section.siteset"><i class="glyphicon glyphicon-cog"></i> <span>网站设置</span></a></li></ul></div></div>');

  $templateCache.put('./component/chapter/chapter.html', '<div class="container-fluid" id="chapter" ng-controller="chapter"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li><a ui-sref="warpper.views.section.novels">图书列表</a></li><li><a ui-sref="warpper.views.section.novel({id:id,name:name})">{{name}}</a></li><li class="active">{{title}}</li></ol><div class="panel panel-{{theme}}"><div class="panel-heading"><div class="btn-group" role="group"><button type="button" class="btn btn-{{theme}}" ng-click="theme=\'primary\'">主题Ⅰ</button> <button type="button" class="btn btn-{{theme}}" ng-click="theme=\'default\'">主题Ⅱ</button> <button type="button" class="btn btn-{{theme}}" ng-click="theme=\'info\'">主题Ⅵ</button> <button type="button" class="btn btn-{{theme}}" ng-click="theme=\'success\'">主题Ⅲ</button> <button type="button" class="btn btn-{{theme}}" ng-click="theme=\'warning\'">主题Ⅳ</button> <button type="button" class="btn btn-{{theme}}" ng-click="theme=\'danger\'">主题Ⅴ</button></div></div><div class="panel-body"><div class="content text-{{theme}}"><p ng-repeat="item in content track by $index">{{item}}</p></div></div></div></div>');

  $templateCache.put('./component/home/home.html', '<div class="container-fluid"><ol class="breadcrumb"><li><a href="#">Home</a></li><li><a href="#">Library</a></li><li class="active">Data</li></ol><div>欢迎</div></div>');

  $templateCache.put('./component/header/header.html', '<div id="header" ng-controller="header"><nav class="navbar navbar-inverse"><div class="container-fluid"><a class="navbar-brand" href="./index.html"><span class="glyphicon glyphicon-book"></span> <span>2台小说分销系统</span></a><div class="dropdown" uib-dropdown ng-show="userInfo.token"><a class="dropdown-toggle" type="button" uib-dropdown-toggle><div class="pic"><img ng-src="{{userInfo.headIconUrl}}" alt=""></div><div class="txt"><small>你好，</small> <span>{{userInfo.nickName}}</span></div><span class="caret"></span></a><ul class="dropdown-menu" uib-dropdown-menu><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-user"></i> <span>个人资料</span></a></li><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-pencil"></i> <span>修改密码</span></a></li><li role="separator" class="divider"></li><li><a href="javascript:void(0);" ng-click="logout()"><i class="glyphicon glyphicon-off"></i> <span>安全退出</span></a></li></ul></div></div></nav></div>');

  $templateCache.put('./component/login/login.html', '<div id="login" ng-controller="login"><div class="container"><div class="row"><div class="col-xs-12"><div class="page-header"><h1>用户登录</h1></div></div></div><div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-4"><div uib-alert ng-repeat="alert in alerts" ng-class="\'alert-\' + (alert.type || \'warning\')" close="closeAlert()">{{alert.msg}}</div></div></div></div><div class="form-horizontal container login-form"><div class="form-group"><label for="username" class="col-xs-12 col-sm-4 control-label">用户名</label><div class="col-xs-12 col-sm-4"><input type="text" class="form-control" id="username" placeholder="用户名" ng-model="user.name"></div></div><div class="form-group"><label for="password" class="col-xs-12 col-sm-4 control-label">密码</label><div class="col-xs-12 col-sm-4"><input type="password" class="form-control" id="password" placeholder="密码" ng-model="user.password"></div></div><div class="form-group"><div class="col-xs-12 col-sm-offset-4 col-sm-4"><div class="checkbox"><label><input type="checkbox" checked>记住账号</label></div></div></div><div class="form-group"><div class="col-xs-12 col-sm-offset-4 col-sm-4"><button type="submit" class="btn btn-default" ng-disabled="flag" ng-click="login()">登录</button></div></div></div></div>');

  $templateCache.put('./component/novel/novel.html', '<div class="container-fluid" id="novel" ng-controller="novel"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li><a ui-sref="warpper.views.section.novels">图书列表</a></li><li class="active">{{novel.name}}</li></ol><div class="jumbotron" ng-show="novel.name"><div class="row"><div class="col-sm-4 col-lg-3"><img ng-src="{{novel.coverImg}}" alt=""></div><div class="col-sm-8 col-lg-9"><h1>{{novel.name}}</h1><p>作者：{{novel.author}}</p><p>字数：{{novel.words | number}}</p><p>{{novel.introduction}}</p></div></div></div><div class="chapter-list"><table class="table table-bordered"><tr ng-repeat="item in list"><td>{{$index+1}}</td><td><a ui-sref="warpper.views.section.chapter({id:item.bookId,chapterid:item.cid,name:item.bookName,title:item.title})">{{item.title}}</a> <span ng-if="item.gold==0" class="free">免费</span> <span ng-if="item.gold!=0" class="charge"><i class="glyphicon glyphicon-piggy-bank"></i>{{item.gold}}</span></td><td><a ng-if="item.gold==0" ui-sref="warpper.views.section.promletters({id:item.bookId,chapterid:item.cid,name:item.bookName,title:item.title})"><i class="glyphicon glyphicon-link"></i> <span>生成推广文案</span></a></td></tr></table><div class="nodata" ng-show="list.length==0">暂无数据</div><div class="pagination-cont" ng-show="pageCount>1"><ul uib-pagination boundary-links="true" force-ellipses="true" total-items="totalItems" max-size="maxSize" ng-model="currentPage" ng-change="pageChanged()" class="pagination" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></ul></div></div></div>');

  $templateCache.put('./component/novels/novels.html', '<div class="container-fluid" id="novels" ng-controller="novels"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li class="active">图书列表</li></ol><div class="table-list"><table class="table table-hover"><thead><tr><th>封面图</th><th>名称</th><th>状态</th><th>性别频度</th><th>派单指数</th></tr></thead><tbody><tr ng-repeat="item in list"><td><div class="novel-coverImg"><img ng-src="{{item.coverImg}}" alt=""></div></td><td><div class="novel-name"><p><a ui-sref="warpper.views.section.novel({id:item.id,name:item.name})">[{{item.typeName}}] {{item.name}} </a><span ng-if="item.isEnd==1">[已完结] </span><span class="text-dark" ng-if="item.isEnd!=1">[连载中<i class="glyphicon glyphicon-arrow-up"></i>]</span></p><p>作者: {{item.author}}</p><p>共{{item.chapter}}章，第{{item.followChapter}}章开始要求关注</p></div></td><td><span ng-if="item.status==1" class="status on">已上架</span> <span ng-if="item.status!=1" class="status off">已下架</span></td><td><span ng-show="item.sex==0">通用</span> <span ng-show="item.sex==1">男频</span> <span ng-show="item.sex==2">女频</span></td><td><span>{{item.recommend || 0 | number}}</span></td></tr></tbody></table><div class="nodata" ng-show="list.length==0">暂无数据</div><div class="pagination-cont" ng-show="pageCount>1"><ul uib-pagination boundary-links="true" force-ellipses="true" total-items="totalItems" max-size="maxSize" ng-model="currentPage" ng-change="pageChanged()" class="pagination" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></ul></div></div></div>');

  $templateCache.put('./component/promotion-letters/promo-letters.modal.html', '<div class="app-modal"><div class="modal-header"><button type="button" class="close" ng-click="cancel()">&times;</button><h3 class="modal-title">生成推广链接</h3></div><div class="modal-body"><div class="container-fluid"><div class="form-horizontal"><div class="form-group"><label class="col-sm-2 control-label">文案标题</label><div class="col-sm-10"><b>{{templateTitle.txt}}</b></div></div><div class="form-group"><label class="col-sm-2 control-label">当前章节</label><div class="col-sm-10"><b>{{currChapter}}</b></div></div><div class="form-group"><label class="col-sm-2 control-label">文案封面</label><div class="col-sm-10"><div class="pic"><img ng-src="{{templateCoverimg.pic}}" alt=""></div></div></div><div class="form-group"><label class="col-sm-2 control-label">正文模板</label><div class="col-sm-10"><div class="pic"><img ng-src="{{templateBodyStyle.pic}}" alt=""></div></div></div><div class="form-group"><label class="col-sm-2 control-label">原文引导模板</label><div class="col-sm-10"><div class="pic"><img ng-src="{{templateFooter.pic}}" alt=""></div></div></div><div class="form-group"><label class="col-sm-2 control-label"></label><div class="col-sm-10"><p class="info"><i class="glyphicon glyphicon-exclamation-sign"></i> <span>确认使用以上模板生成推广链接吗？</span></p><p class="tip">生成的推广链接就是微信后台的原文链接，后续您可以在后台菜单的"推广链接"中找到它并查看统计数据</p></div></div></div></div></div><div class="modal-footer"><p class="createErrMsg">{{createErrMsg}}</p><button class="btn btn-warning" type="button" ng-click="createdLink()">生成</button> <button class="btn btn-primary" type="button" ng-click="cancel()">取消</button></div></div>');

  $templateCache.put('./component/promotion-letters/promotion-letters.html', '<div class="container-fluid" id="promotion-letters" ng-controller="promotion-letters"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li><a ui-sref="warpper.views.section.novels">图书列表</a></li><li><a ui-sref="warpper.views.section.novel({id:id,name:name})">{{name}}</a></li><li class="active">推广文案</li></ol><div class="container-fluid"><div class="template-content"><div class="promo-template"><div class="promo-template-title"><h1 id="article-title" class="article-title">{{templateTitle.txt}}</h1></div><div class="promo-template-coverimg" id="article-coverimg"><img ng-src="{{templateCoverimg.pic}}" alt=""></div><div id="article-body" class="promo-template-body" ng-include="templateBodyStyle.templateUrl"></div><div id="article-footer" class="promo-template-footer" ng-include="templateFooter.templateUrl"></div></div></div></div><nav class="navbar navbar-default navbar-fixed-bottom"><div class="container-fluid"><div class="set-template"><ul class="button-list"><li class="dropdown" uib-dropdown><button class="btn btn-default dropdown-toggle" type="button" uib-dropdown-toggle>文案标题 <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu><li ng-repeat="item in templateTitles track by $index"><a href="javascript:void(0);" ng-click="changeTitle($index,\'article-title\')">{{item.txt}}</a></li></ul></li><li class="dropdown" uib-dropdown><button class="btn btn-default dropdown-toggle" type="button" uib-dropdown-toggle>文案封面 <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu><li ng-repeat="item in templateCoverimgs track by $index"><a href="javascript:void(0);" ng-click="changeCoverimg($index,\'article-coverimg\')"><img ng-src="{{item.pic}}" alt=""></a></li></ul></li><li class="dropdown" uib-dropdown><button class="btn btn-default dropdown-toggle" type="button" uib-dropdown-toggle>正文模板 <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu><li ng-repeat="item in templateBodys track by $index"><a href="javascript:void(0);" ng-click="changeBody($index,\'article-body\')"><img ng-src="{{item.pic}}" alt=""></a></li></ul></li><li class="dropdown" uib-dropdown><button class="btn btn-default dropdown-toggle" type="button" uib-dropdown-toggle>原文引导模板 <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu><li ng-repeat="item in templateFooters track by $index"><a href="javascript:void(0);" ng-click="changeFooter($index,\'article-footer\')"><img ng-src="{{item.pic}}" alt=""></a></li></ul></li><li class="dropdown"><div class="btn-group"><div class="btn-group" role="group"><button type="button" class="btn btn-info" ng-click="createLink()">生成推广链接</button></div></div></li></ul></div></div></nav><div uib-alert ng-repeat="alert in alerts" ng-class="\'alert-\' + (alert.type || \'success\')" close="closeAlert()">{{alert.msg}}</div></div>');

  $templateCache.put('./component/promotion-letters/template-body-style-1.html', '<section class="promo-template-section" ng-repeat="items in chapters track by $index"><section class="section-header"><section class="center"><span></span><span></span><span></span><span>{{items.chapterTitle}}</span><span></span><span></span><span></span></section></section><section class="section-body"><p ng-repeat="item in items.chapterContent track by $index">{{item}}</p></section><section class="section-footer"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></section></section>');

  $templateCache.put('./component/promotion-letters/template-body-style-2.html', '<section class="promo-template-section" ng-repeat="items in chapters track by $index"><section class="section-header"><section class="center"><span></span><span></span><span></span><span>{{items.chapterTitle}}2</span><span></span><span></span><span></span></section></section><section class="section-body"><p ng-repeat="item in items.chapterContent track by $index">{{item}}</p></section><section class="section-footer"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></section></section>');

  $templateCache.put('./component/promotion-letters/template-body-style-3.html', '<section class="promo-template-section" ng-repeat="items in chapters track by $index"><section class="section-header"><section class="center"><span></span><span></span><span></span><span>{{items.chapterTitle}}3</span><span></span><span></span><span></span></section></section><section class="section-body"><p ng-repeat="item in items.chapterContent track by $index">{{item}}</p></section><section class="section-footer"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></section></section>');

  $templateCache.put('./component/promotion-letters/template-footer-style-1.html', '<section class="footer-style-01"><p><strong>未完待续...</strong></p><p><strong>点击</strong><strong><b>“阅读原文”</b></strong><strong>阅读后续精彩情节</strong></p><section class="pic"><img src="../../assets/image/promo-look-original-01.gif" alt=""></section></section>');

  $templateCache.put('./component/promotion-letters/template-footer-style-2.html', '<section class="footer-style-01"><p><strong>未完待续...2</strong></p><p><strong>点击</strong><strong><b>“阅读原文”</b></strong><strong>阅读后续精彩情节</strong></p><section class="pic"><img src="../../assets/image/promo-look-original-01.gif" alt=""></section></section>');

  $templateCache.put('./component/promotion-letters/template-footer-style-3.html', '<section class="footer-style-01"><p><strong>未完待续...3</strong></p><p><strong>点击</strong><strong><b>“阅读原文”</b></strong><strong>阅读后续精彩情节</strong></p><section class="pic"><img src="../../assets/image/promo-look-original-01.gif" alt=""></section></section>');

  $templateCache.put('./component/promotion-link/promotion-link.html', '<div class="container-fluid" id="promotion-link" ng-controller="promotion-link"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li><a ui-sref="warpper.views.section.novels">图书列表</a></li><li><a ui-sref="warpper.views.section.novel({id:id,name:name})">{{name}}</a></li><li class="active">推广链接</li></ol><div class="container-fluid"><div class="row"><div class="col-md-6"><div class="template-content"><div class="promo-template"><div class="promo-template-title"><h1 class="article-title">{{templateTitle.txt}}</h1></div><section id="tpl-body-copy"><section class="promo-template-coverimg"><img ng-src="{{templateCoverimg.pic}}" alt=""></section><section class="promo-template-body" ng-include="templateBodyStyle.templateUrl"></section><section class="promo-template-footer" ng-include="templateFooter.templateUrl"></section></section></div></div></div><div class="col-md-6"><p class="link"><b>推广链接：</b> <a href="javascript:void(0);" target="_blank">{{link}}</a></p><p class="tip">请复制上方推广链接，后续您可以在后台菜单的"推广链接"中找到它并查看统计数据</p><p class="warning"><i class="glyphicon glyphicon-exclamation-sign"></i> <span>请务必使用此链接作为文案的原文链接，不要使用微信中点开后手工复制的链接</span></p><div class="btn-list"><div class="btn-group"><div class="btn-group" role="group"><button type="button" class="btn btn-info" ngclipboard data-clipboard-text="{{templateTitle.txt}}" ngclipboard-success="copyTitleSuccess(e)" ngclipboard-error="copyTitleError(e);">复制标题</button></div><div class="btn-group" role="group"><button type="button" class="btn btn-info" ngclipboard data-clipboard-target="#tpl-body-copy" ngclipboard-success="copyBodySuccess(e)" ngclipboard-error="copyBodyError(e);">复制正文</button></div><div class="btn-group" role="group"><button type="button" class="btn btn-info" ngclipboard data-clipboard-text="{{link}}" ngclipboard-success="copyLinkSuccess(e)" ngclipboard-error="copyLinkError(e);">复制推广链接</button></div></div></div><div uib-alert ng-repeat="alert in alerts" ng-class="\'alert-\' + (alert.type || \'success\')" close="closeAlert()">{{alert.msg}}</div></div></div></div></div>');

  $templateCache.put('./component/promotion-list/promotion-list.html', '<div class="container-fluid" id="promotion-list" ng-controller="promotion-list"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li class="active">推广链接</li></ol><div class="table-list"><table class="table table-hover"><thead><tr><th>推广链接</th><th>原文章节</th><th>点击量</th><th>新增用户</th><th>新增关注</th><th>充值金额</th><th>操作</th></tr></thead><tbody><tr ng-repeat="item in list track by $index"><td><p class="link"><a href="javascript:void(0);">{{item.link}}</a> <button type="button"><i class="glyphicon glyphicon-duplicate"></i></button></p><p class="time">创建时间: {{item.createDate | date:"yyyy/MM/dd HH:mm"}}</p></td><td><div class="ori-chapter"><div class="fl"><div class="pic"><img ng-src="{{item.bookImg}}" alt=""></div></div><div class="fl chapter"><p><a ui-sref="warpper.views.section.novel({id:item.bookId,name:item.bookName})">{{item.bookName}}</a></p><p><button type="button" ui-sref="warpper.views.section.chapter({id:item.bookId,chapterid:item.cid,name:item.bookName,title:item.cTitle})">{{item.cTitle}}</button></p></div></div></td><td>{{item.clickNumber | number}}</td><td>{{item.addNumber | number}}</td><td>{{item.followNumber | number}}</td><td>{{item.payMoney | currency : "￥" : 2}}</td><td><a href="javascript:void(0);" ng-click="promotionLetters(item)">查看文案</a></td></tr></tbody></table><div class="nodata" ng-show="list.length==0">暂无数据</div><div class="pagination-cont" ng-show="pageCount>1"><ul uib-pagination boundary-links="true" force-ellipses="true" total-items="totalItems" max-size="maxSize" ng-model="currentPage" ng-change="pageChanged()" class="pagination" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></ul></div></div></div>');

  $templateCache.put('./component/section/section.html', '<div id="section"><ui-view></ui-view></div>');

  $templateCache.put('./component/site-settings/site-settings.html', '<div class="container-fluid" id="site-settings" ng-controller="site-settings"><ol class="breadcrumb"><li><a href="javascript:void(0);"><i class="glyphicon glyphicon-home"></i> <span>Home</span></a></li><li class="active">网站设置</li></ol><uib-tabset active="active"><uib-tab index="0" heading="公众号设置"><div class="alert alert-warning alert-dismissible"><strong>注意: </strong>接入公众号必须是 “ 认证服务号 ”</div><div class="form-horizontal"><div class="form-group"><label class="col-sm-3 control-label">网站首页</label><div class="col-sm-5"><p class="form-control-static">email@example.com</p></div></div><div class="form-group"><label class="col-sm-3 control-label">原始ID</label><div class="col-sm-5"><input type="email" class="form-control" placeholder="微信公众平台的原始ID"> <span class="help-block">注意: 上线后请不要更改公众号，否则会影响先前的粉丝，如需换号请申请开新号</span></div></div><div class="form-group"><label class="col-sm-3 control-label">微信号</label><div class="col-sm-5"><input type="email" class="form-control" placeholder="微信用户可通过该微信号搜索到你的公众账号"></div></div><div class="form-group"><label class="col-sm-3 control-label">昵称</label><div class="col-sm-5"><input type="email" class="form-control" placeholder="微信公众账号展示的昵称"></div></div><div class="form-group"><label class="col-sm-3 control-label">App ID</label><div class="col-sm-5"><input type="email" class="form-control" placeholder="开发者的AppID"></div></div><div class="form-group"><label class="col-sm-3 control-label">App Secret</label><div class="col-sm-5"><input type="email" class="form-control" placeholder="开发者的应用密钥"></div></div><div class="form-actions"><div class="form-group"><div class="col-sm-offset-3 col-sm-5"><button type="submit" class="btn btn-primary">保存</button></div></div></div></div></uib-tab><uib-tab index="1" heading="公众号接入" disable="!weixingongzhong"><div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>消息：</strong>生成菜单失败</div><div class="form-horizontal"><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">业务域名</label><div class="col-sm-5"><p class="form-control-static">email@example.com</p></div></div><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">JS接口安全域名</label><div class="col-sm-5"><p class="form-control-static">email@example.com</p></div></div><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">网页授权域名</label><div class="col-sm-5"><p class="form-control-static">email@example.com</p></div></div><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">URL（服务器地址）</label><div class="col-sm-5"><p class="form-control-static">email@example.com</p></div></div><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">Token（令牌）</label><div class="col-sm-5"><p class="form-control-static">89a5f04e9ea2d561f23d987f0d0e7c7d</p></div></div><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">EncodingAESKey（消息加解密密钥）</label><div class="col-sm-5"><p class="form-control-static">随机生成</p></div></div><div class="form-group"><label class="col-sm-4 col-lg-3 control-label">消息加解密方式</label><div class="col-sm-5"><p class="form-control-static">明文模式</p></div></div><div class="form-actions"><div class="form-group"><div class="col-sm-offset-4 col-lg-offset-3 col-sm-5"><button type="submit" class="btn btn-primary">生成菜单</button></div></div></div></div></uib-tab></uib-tabset></div>');

  $templateCache.put('./component/warpper/warpper.html', '<div id="warpper" ng-controller="warpper"><ui-view name="header"></ui-view><ui-view name="body"></ui-view></div>');

}]);

})();