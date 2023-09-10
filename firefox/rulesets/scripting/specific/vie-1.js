/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banners","#widget-15,\n.WidgetFramework_WidgetRenderer_Html",".top-mobile-banner",".cash-fish",".cash-fish-pc,\n.preload-pc",".banner-sticky-footer-wrapper","#catfish","#chilladv,\n#headermbads,\n#headerpcads,\n#mobiads,\n#pcads","a[rel=\"nofollow\"]","#overlay","#hide_float_right","#middle-box-screen,\ndiv[style^=\"position: fixed; bottom: 0px;\"]","#quang-cao","#popup-giua-man-hinh",".item-more,\n.widget-sidebar-block","#backgroundPopupp,\n#popupContact",".btn-single-cuoc",".code-block",".jw-logo",".banner-top",".float-ck","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]","#player + div[id]",".catfish-ck",".t_logo","#qc_clgt",".advertisement","#fbox-background,\n.gnarty-offads","#mobile-ads",".ads",".fade.show",".btn-user.r-btn,\n.sidebar-right",".mct_-bet",".modal-backdrop.show",".ibs-bet","div[class*=\"size-\"]","#m-bet","#BaoMoi_HalfPage",".bm_B > div,\ndiv.ad-banner-list,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".aHrefAff,\n.adsInPlayer,\n.bet-list,\n.buttonFabet,\n.top-bet-list","#wap_bottombanner",".company","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]","#right_float,\n.art_header_text,\n[id$=\"float_banner\"]","[class*=\"_banner\"]",".menu-mobile.hot-menu",".container-banner,\n.logo-top-right-append-custom,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".button-bottom-center-append-custom",".button-in-player-box",".sticky",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".banner-bottom-append-custom",".footer-banner",".widget.widget_text","#text-13,\n#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".adblock,\n.popup",".adsv","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#ads-preload","#custom_html-7",".div_box_adv","div.box-aside","#content > div[align=\"right\"],\n#login-ads,\n#playerDailymotion,\n.video-player,\n.wt-ads,\n.wt-ads2",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".ad-container","#sideAdsLeft,\n#sideAdsRight","#home_header","#fixedban,\ndiv[class^=\"banner-mobile\"]",".samCustomSize.samAlignCenter.samCodeUnit",".samItem","#antiblocker,\n#antiblocker_underplayer","#layerLogo",".float-ck-center-lt",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense",".banner-bot-mobile,\n.banner-top-mobile,\n.preload",".catfishLoader","#custom_html-2,\n#custom_html-4","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".ads-embed,\n.float-ck-center-lt1,\n.separator_mb,\n.separator_pc,\n.topbaner,\n.topbaner_mb","#ads_preload",".bn-lg-sidebar","#ad_footer_top,\n#ad_header_top,\ndiv[id^=\"ad_banner\"]",".anhbn-qc",".ezo_ad,\n.ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]",".banner-inner",".dwpb-action,\n.fixtop",".adsHOC_wrapper__i5MTn,\n.homePage_adsHomeLeft__3_ruz.adsHOC_wrapper__Se0cN,\n.style_wrapperAll__jFIbb,\n.style_wrapperAll__oHfiq,\n.style_wrapper__2LeQp,\n.style_wrapper__YEwSi,\n.textlinkBox_notwrap__scC4g.textlinkBox_wrapper__1C2P9,\n.textlinkBox_wrapper,\np[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown","div[id^=\"adsphim-\"]",".ff-banner",".player-midpoint-progress",".player-vast-blocker","#sponsor-balloon","#js-read__body + .mt-3,\n#tpads-pc-top-page,\n.nh-read__alert,\n.px-3.nh-read__body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\ndiv.text-center.pt-3:nth-of-type(1),\ndiv.text-center.pt-3:nth-of-type(2)","div[class*=\"ads\"]",".adv_phim",".fixed_bottom","[class^=\"box_adv_ele\"]","#tdi_129",".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container","#IMAPointernctPlayer,\n#PL_R01,\n#PL_R02,\n.adv_home_300_250,\n.nqc-zone","#adsTopInPageBanner,\n#popup,\n.adsContainer",".pcCatfish","#itro_opaco","#video_player ~ div[id],\ndiv[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".ads_popup","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right,\n.popUpBannerBox",".adpia_banner",".popmake",".box_option,\n.event_loader_e,\n.fix_bottom,\n.popup_center",".uniad-player + div[style]","#catfish-banner,\n.topless","#itro_popup","#float_content_right",".preload-banner",".sticky-footer",".sgpb-popup-dialog-main-div-wrapper,\n.sgpb-popup-overlay",".ads-container",".ads-bottom-margin,\n.ads_blocks_advice,\n.bs-callout[style=\"min-height: 400px; margin-top:0px;\"]",".top-banner","#adsposttop","#adrighttop",".adbox",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide","#divFLRALeft,\n#divFLRARight,\np[style^=\"display: block; position: fixed;\"]",".no-auto-popup,\n.qc-adskeeper",".add-logo-ads",".stream-item","#footer-widget-area,\n.e3lan.e3lan-top",".box,\n.pum",".truct-catfish,\n.truct-widget","#sticky-footer","#topbanner,\n.footer-info","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#preload-zing,\n#uniad-head,\n.uniad-head",".sda-catfish","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt",".row > div > center","div[class^=\"adbox\"]","#article > .pt-3.text-centers","#balloon,\n.banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads",".box-banner",".banner_pc,\n.datcuoc.button","#adstop2,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".banner-preload","#invideo_wrapper,\n.Ads,\n.mobile-catfixx,\n.pc-catfixx,\ndiv.Dvr-300,\ndiv[style^=\"position: fixed; top: 60px\"]","#ballon-right,\n.most-view:nth-child(2)",".ab1",".single-video","#mp-adbk,\n#mp-adx-b32",".mp-adz",".box_odds,\n.widget_custom_html.widget.widget_text",".fixed",".dcmm-button-player.row",".widget",".show-ads-banner",".adLogoPlayer",".entry > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)","#app-web + .container[style=\"margin-bottom: 30px\"],\n.box-content .text-center[style],\n.item.item-betnow,\n.sv-link.btn-bet-top",".mmo-inner",".btn-betnow",".show.fade",".button-ads-header,\n.main-carousel-wrapper,\n.top-bookies,\n.tvc-link-ads-full","#sec_top_bet,\n.banner-bellow-append-custom,\n.banner_ctn,\n.banner_fixed,\n.banner_left,\n.banner_right,\n.bet-btn,\n.bet_now,\n.block_banner,\n.btn-in-player.btn-bottom-right-append-player,\n.click_blank,\n.logo-top,\n[href=\"/top-bet.html\"]",".banner",".marquee-container","#quangcaopc",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".btn-odds,\n.btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container","div[id^=\"dnn_\"]","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]",".container > .row > center","[id^=\"Balloon_\"]","#accordion",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".ad599div,\n.bets-now-button,\n.bets-now-ct,\n.pc_header,\na[data-wpel-link=\"external\"]","#closeAds","a[href^=\"/redirect/out?token=\"]","div.container:nth-of-type(5)","#adx,\n.catfish-bottom,\ndiv.banner-catfish-bottom","#_AM_POPUP_FRAME",".gnartyx-offads","[href*=\"cellphones.com.vn\"]",".textwidget",".expand-static-banner,\n.head--banner,\n.static-banner",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".show.fade.modal",".sub-menu.d-none.d-lg-flex",".link-gold,\n[id^=\"banner\"]",".col-xl-3.col-lg-6.d-md-block.d-none,\n.lazyloaded.mx-auto.d-block.text-center.mb-20,\n.quangcao-down > p,\n.text-down",".ads_zone","#footer_fixed_ads",".cp-modal-popup-container,\n.simple-banner",".ad-floater,\n.promotion-popup,\n.video-ad-layer",".adsbygoogle","#ad_global_below_navbar",".other-ads-container,\n.show-load-ad","#boxmsgthongbaopopup",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]",".banner-sidebar","#sticker",".info-footer:nth-child(4)",".preload-backdrop",".ads-wrapper",".a--d-wrapper",".mobile-catfix",".fancybox-container,\n.flex-wrap-banner,\n.movie-banner,\n.mv-banner,\n.ws-banner",".single-box,\n[href^=\"//dooloust.net/\"]",".banner_top","#npads","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nlixi88-ads-left,\nmb_catfish_1xbet,\nmobile-catfix,\npreload-11bet,\nsobet-ads-right","#headwrap > .computer,\n#headwrap > .mobile,\n.pc-catfix",".container > .right-box","#popup_banner_beta",".ad-script,\n.elementor-widget-container > .widget_custom_html","[href^=\"https://gotrackecom.info\"]","#desktopPopupBanner,\n.ads-floatingads,\n.banner-item,\n.top-nha-cai",".btn-odds.btn-default.btn,\n.ibs-bet.btn-odds,\n.mct_-bet-bot",".mmo",".fixed-bottom",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit","#catfish-adv,\n#overlay-pop,\n.mobile-catfish,\n.pc-catfish",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar",".popunder-link","#catfish_content",".adsShowMobile",".ads-menu",".divdatcuoc","#fixed-advert-center-panel",".PanelScroller.Notices",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".homePageAds","#bar_float_r,\n.quangcaomb",".box-host,\n.captain-sb,\n.vb-pr-box",".ft-box","div.vebo-sp.container:nth-of-type(7)",".sticky_bottom",".adsMobile,\n.adsShowPc,\n.offer-rating.widget-offers__list",".offer__btn","#top-banner-pc,\n.lixitt",".footer-fixed-br-container","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-cuoc-8xbet,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2),\ndiv#match-child-1.d-lg-none.d-flex.col-sm-6.col-lg-6.grid-matches__item:nth-of-type(4),\nspan.btn-odds",".d-lg-none.d-block.p-1.text-center",".match-detail__offer","div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]","#menu-item-52424,\n.btn-od,\n.d-lg-none.d-flex.btn-odds.text-center,\n.style-1.ml-2.d-none.d-lg-block.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-52424,\n.text-center.btn-odds.d-none.d-lg-block",".ads-menu-item,\n.dcmm-button-player-item","#bnc1","#bnc0",".widget_media_image.widget_block.widget,\nimg.wp-image-1283,\nimg.wp-image-1285","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-8xbet,\n.menu-cuoc-one88,\n.menu-top-nha-cai,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.sk_balloon,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)","a.d-lg-none.d-block:nth-of-type(1)","div[data-value=\"1\"]",".block-bookmaker.block.most-view","#mobileCatfishz","#qc-kpgame","#ad-container","#ads,\n#overlay-close,\n#play",".banner-top-box","#position_full_top_banner_pc,\n.window_popup","#newmenu + div > div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double",".box-ads-bar","div[id^=\"adsWeb\"]",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"],\ndiv[style*=\"position: fixed;\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#maiContent > div > div.colLt > aside,\n.bnr,\n.cate-24h-foot-box-adv-view-news > .row > .col-6:first-child,\nDIV[class=\"banner-LR\"]",".admicro",".top-header","#onefootball,\n.top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#dta_inpage_wrapper,\n#dtads_inpage_wrapper,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page",".widget_media_image.widget",".banner-cs",".banner-top-main,\n.baohaiquan_bottom_970x250",".top-advertisment",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".columns-widget .col-right",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".box_ads_d",".exp_qc_share",".c-banner",".warp-banner-vip",".sidebar > div[style]","#div-ub-docbao","#ouibounce-modal,\ndiv[id^=\"adsbg\"]","#widget-12",".banr-Rt,\n.banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_baiviet_dexuat,\n.box_quangcao_mobile_320x50,\n.box_text_qc","#tubia","[id^=\"admzone\"]",".ads-right1,\n.adv-row",".adx-zone,\n.underlay",".khw-ads-wrapper.clearfix","#qcRight,\n.banner-advertisements",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".qc-benphai,\n.qc-bentrai","[class^=\"size\"]","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion","#modal-ads-olm",".advertTop,\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_chan_trang_pc,\n.quang_cao_pc_right_hoc_tap",".advHolder",".ads_shortcode",".admicro_top","#adop_bfd,\n.adsbypubpower,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.baseHtml.noticeContent,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".banner-ads-home,\n.banner-in","div[class^=\"adv-\"]",".ads-970x280","#mobi-top,\n#pc-top,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".modal-di__button-wrapper,\n.sam-slot",".ads-general-banner",".LeftFloatBanner,\n.RightFloatBanner,\n.ads_top_left",".asd-headt,\n.detail-tab > .container,\n.detail__foru,\n.super-masthead,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"],\ndiv[data-id=\"2\"]",".ads_660x90,\n[class^=\"ads_\"]",".bannerTOP1,\n.pc.bannerAuto","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#headerProxy,\n.rightleftads","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone",".zone--ad","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".v-element > .v-responsive,\ndiv.message--post",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab,\n#banner2ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n#site-header,\n.znews-banner","#preload-2",".most-view:first-child","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".click-ads,\n.click-ads ~ p,\ndiv.mrb10"];

const hostnamesMap = new Map([["*",0],["bongda365.asia",1],["keoso.club",[1,15]],["bongdatructuyen22.com",[1,48]],["soikeoz.net",[1,236]],["azviet.biz",2],["phim18hd.biz",[3,4]],["phim18vn.biz",[4,5]],["biphims.cc",6],["biphims.co",6],["biphim.in",[6,9]],["phimmoiaz.cc",7],["phimbocn.com",[7,63]],["phimhoathinh3d.com",[7,14]],["phimmoiv2.com",[7,72,124]],["phimmoipro1.net",[7,14,19,172,235]],["xemphimchill.net",[7,14]],["hhtqvietsub.top",[7,106,267]],["hhninja1.tv",7],["hoathinhtq.tv",[7,14]],["hhtq.vip",7],["phimmoichill.cc",8],["subnhanhvl.cc",[9,10]],["phimmoi4s.com",[9,123]],["stream.tructiepnba.com",[9,144]],["xemtivi4k.com",[9,164]],["vidian.me",[9,198]],["ketqua3.net",[9,221]],["ketqua9.net",[9,221]],["subnhanh.vip",[9,10]],["truyenchu.com.vn",[9,318]],["nghean24h.vn",9],["vbfast.xyz",9],["vkoolsss.net",[10,21,24,246]],["tructiepdabong21.site",[10,175,253,265,266]],["mitomv.tv",[10,34,43,44,187,188,189,191,208,209,270,273]],["tuoinung.cc",11],["animehay.city",12],["anivn.club",[13,14]],["fimfast2.com",[14,72,73]],["phimdinhcao.com",[14,120,121]],["phimtn.com",[14,63,80,127]],["8phimmoi.net",[14,19,72,202]],["hhtq.net",[14,63,149]],["mephimgi.net",[14,72]],["phimdinhcao.net",[14,120,121]],["phimlongtieng.net",[14,120,121]],["vkool2.net",[14,172]],["motchillz.org",[14,19,72]],["bongda21h.co",[16,17]],["phym18.org",[16,43,257]],["phimvietsub.co",18],["gocphim.vip",[18,282]],["p.thoctv.co",19],["api.anime3s.com",[19,25]],["bongda365b.com",[19,20,42]],["cakhia18.com",[19,49,50,51,52,53,54,55]],["rakhoi7.com",[19,51,52,53,54,55,137]],["p.thoctv.com",19],["player.4shares.live",19],["cakhia22.live",[19,49,50,51,52,53,54,55]],["mephimtv.net",[19,229]],["ssplay.net",[19,202]],["play.vnupload.net",19],["tvhayb.org",[19,25,236]],["vebo3.org",[19,33,34,35,36,37,181,183,241,261,262]],["xoilac12.org",[19,35,36,37,182,262,263]],["caheo7.tv",[19,49,50,51,52,53,54,55]],["cakhia27.tv",[19,49,50,51,52,53,54,55]],["rakhoi12.tv",[19,51,52,53,54,55,137]],["livefb.xyz",[19,50,51,54]],["mphimmoi.xyz",[19,30,86,116,393]],["123nhadatviet.com",20],["123nhadatviet.net",20],["tuoitre.vn",[20,376]],["tuoitrenews.vn",20],["4rkinggame.com",21],["dailyphimz.com",[21,63]],["kenhgamez.com",21],["listnhacai1.com",[21,99]],["phim18vipb.com",21],["phimplay24h.com",[21,126]],["rphang.me",[21,196]],["phimhay.mobi",[21,200]],["gunnylau360.net",21],["gunnymienphi.net",21],["mythethao.net",[21,231]],["thiendia1.net",[21,243]],["vuonhoalan.net",[21,249]],["checkgaigoi.one",21],["phim33.us",[21,280]],["phe3x.xyz",21],["phimno4.xyz",[21,63,394]],["live.7mvn2.com",22],["abysscdn.com",23],["freeplayervideo.com",23],["player-cdn.com",23],["ahaphimz.com",24],["vphims.net",24],["tvhay2.net",[25,91,244]],["phimmoivn.pro",[25,264]],["anime47.com",[26,27]],["doctruyen3qne.com",27],["toptruyenne.com",27],["animetvn2.com",[28,29]],["animet.net",[28,203]],["appvn.com",30],["huphimtv.com",[30,73,85,86]],["javtopxx.com",[30,89]],["laptrinhx.com",30],["linkerpt.com",30],["tinnhac.com",30],["xemphimvuis.com",[30,86]],["animevietsub.fan",[30,167]],["film365.in",[30,63,168,169]],["xsmn247.me",[30,199]],["xoso.mobi",[30,199]],["vlxx.moe",[30,103,166,201]],["ghienphim8.net",[30,186,215]],["ophimhdvn1.net",[30,228,233]],["phimgigi.net",[30,228,233,234]],["soikeo365.net",[30,239]],["vieclam123.net",30],["xemphimviet1.net",[30,186,215,250]],["cungthi.online",30],["antt.vn",30],["bongda24h.vn",30],["kienthuc.net.vn",[30,351]],["nhadautu.vn",30],["saostar.vn",[30,360]],["vietnamplus.vn",[30,383]],["banhkhuc6.com",[31,32,33,34,35,36,37]],["90phut9.live",[31,34,36,37,180]],["bongcam.live",[34,37,181,182,183]],["khomuc9.live",[34,183,184]],["veboz.live",[34,43,44,55,183,187,188,189,190,191]],["cakhiaz.net",[34,43,44,187,188,189,191,207,208,209]],["thapcam.net",[34,37,183,240,241]],["90phutv.tv",[34,43,44,187,188,208,269,270,271]],["xoilac82.tv",[34,43,44,183,187,188,191,209,266,271,278]],["baomoi.com",38],["m.baomoi.com",39],["baonga.com",40],["bongda12h365.com",41],["bongdainfoz.com",[43,44]],["xoilaczz.tv",[43,279]],["bongdalu6.com",45],["bongdaso12.com",[46,47]],["bongdaso66.net",[46,47]],["tvso1.com",47],["blog.abit.vn",[47,289]],["hoatieu.vn",[52,134,156,341]],["canhrau.com",56],["topthuthuat.com",56],["chouc.com",57],["clbgamesvn.com",58],["cmangaaz.com",59],["coccoc.com",60],["contuhoc.com",61],["cryptoviet.com",62],["dongphymz.com",63],["iphimchilla.com",[63,87]],["motchill3.com",63],["motphim1.info",[63,173]],["phimbathu.one",[63,251]],["dexuat.com",64],["diadiem.com",65],["doisongphapluat.com",66],["dtruyen.com",67],["dubaotiente.com",[68,69]],["ducvietonline.de",69],["bongda.com.vn",[69,303]],["giadinhonline.vn",[69,321]],["nongnghiep.vn",[69,321]],["vietnamnet.vn",[69,382]],["ebookbkmt.com",70],["ephoto360.com",[71,72]],["thiepmung.com",72],["ophim.vip",[72,124,172,284]],["fsharetv.com",74],["game4v.com",75],["forum.gocmod.com",[76,77]],["voz.vn",[77,386]],["hayghe2.com",78],["hh3dhay.com",[79,80]],["khoaiphim.com",[80,90,91]],["phimhay.in",80],["chillhayy.online",80],["vietphims.tv",[80,277]],["hoahoc247.com",81],["hoidap247.com",82],["homedy.com",83],["hotruyen.com",84],["phim18zz.com",[86,116]],["hdphimhay.xyz",86],["javtiful.com",88],["khosinhvien.com",92],["kienthucforex.com",93],["lacaigi.com",94],["laptrinhcanban.com",95],["lichngaytot.com",96],["lichvannien365.com",97],["link1s.com",98],["lmssplus.com",100],["loigiaihay.com",101],["luotphimtv1.com",102],["luotphim1.net",102],["luotphim2.net",102],["luotphimtv.vip",102],["mehoathinh3.com",[103,104]],["mephimmy2.com",103],["mephimnhat2.com",[103,104,105,106]],["mephimthai2.com",103],["animevip.tv",103],["phimmoi2.com",[104,105,106]],["phimnhanh2.com",[104,105,106]],["vuighe2.com",[104,158]],["metruyencv.com",107],["mmo4me.com",108],["baodauthau.vn",[108,294]],["mphim14.com",[109,110]],["phimmoinay.tv",[109,149,236]],["phimanimehd.net",[110,128,225]],["muabanraovat.com",111],["muaxegiatot.com",112],["nettruyenus.com",113],["nhattruyenup.com",113],["nhaccuatui.com",114],["ophimhay.com",115],["phim202.com",117],["player.phimbocn.com",118],["cliphotvn.2tenz.top",118],["phimchat2.com",119],["saytruyenmoi.com",119],["phimbo88vn.net",119],["truyentuan.com",[121,147]],["tenovi.net",121],["phimhaymoi.com",122],["phimnhua.com",125],["phimyeuthich.com",[128,129]],["boophim.net",[128,206]],["lxmanga.net",[128,129,225,226]],["phimnet.vip",[128,169,285]],["truyensextv.com",[129,145]],["photoshoponlinemienphi.com",130],["gameviet.mobi",130],["phuongtrinhhoahoc.com",[131,132,133]],["ketqua247vn.org",131],["tructiepbongda22.com",133],["thanhnien.vn",[133,365]],["quantrimang.com",[134,135,136]],["vndoc.com",[136,156]],["khoahoc.tv",136],["download.com.vn",136],["download.vn",[136,326]],["gamevui.vn",[136,326,335]],["meta.vn",136],["razorphimzz.com",138],["tctruyen.com",139],["thoctv.com",140],["thuthuatjb.com",141],["thuthuattienich.com",142],["toithuthuat.com",143],["truyensieuhay.com",146],["tvzinghd.com",[148,149]],["vatlypt.com",150],["vesotantai.com",151],["vietcetera.com",152],["vietgiaitri.com",153],["vietjack.com",154],["vietyo.com",155],["vtruyen.com",157],["webhoctienganh.com",159],["webphim2.com",160],["webtretho.com",161],["xemlivenhanh.com",[162,163]],["qdnd.vn",162],["xosodaiphat.com",165],["zuiphim.com",166],["chillphim.vip",[166,281]],["a3manga.info",170],["motchill.info",[171,172]],["motphimtv.vip",[171,172]],["phimmoichillg.net",172],["phimhaytv.info",174],["xoivo7.info",[175,176,177,178]],["vaoroi13.online",[175,176,252,253,254]],["vaoroi365.tv",[176,177,254,274]],["maclife.io",179],["mannhan2.live",[185,186]],["thichxemphim1.net",[186,242]],["baoxaydung.com.vn",186],["oj.husc.edu.vn",186],["kinhtenongthon.vn",186],["taichinhdoanhnghiep.net.vn",186],["antt.nguoiduatin.vn",186],["tienphong.vn",[186,294,369,370]],["toquoc.vn",186],["zingnews.vn",[186,345,391]],["chotlo.me",192],["keonhacai5.me",[193,194]],["xemtivingon.org",194],["ngaytho.me",195],["thethao12h.me",197],["zophim.net",202],["bantincongnghe.net",204],["blogkiienthuc.net",205],["chodansinh.net",210],["daominhha.net",211],["designervn.net",212],["dongphim3s.net",213],["gamenoob.net",214],["giavang.net",216],["romgoc.net",216],["truongblogger.top",216],["gockhuat.net",217],["gocphimk.net",218],["hoc247.net",219],["vn.javbabe.net",220],["kienviet.net",222],["laptrinhvb.net",223],["linkneverdie.net",224],["mephimnhez.net",[227,228]],["mitub.net",230],["nhacpro.net",232],["phimtho.net",236],["protruyen.xyz",[236,396]],["qthang.net",237],["sachmoi.net",238],["vietmoz.net",245],["vnexpress.net",247],["vtipster.net",248],["bongdahomnay.org",255],["btcvn.org",256],["vn.phym18.org",258],["traderviet.org",259],["tuoi69vn.org",260],["viet69.tube",268],["hhhkungfu.tv",272],["vieclam.tv",[275,276]],["xskt.com.vn",276],["khiphach.vip",283],["24hmoney.vn",286],["2banh.vn",287],["2game.vn",288],["afamily.vn",290],["sport5.vn",290],["m.afamily.vn",291],["autodaily.vn",292],["xehay.vn",[292,389]],["baodansinh.vn",293],["blogtruyen.vn",295],["cafebiz.vn",296],["cafef.vn",297],["ttvn.toquoc.vn",297],["careerlink.vn",298],["chap.vn",299],["24h.com.vn",300],["autopro.com.vn",301],["baohaugiang.com.vn",302],["congan.com.vn",304],["daklak24h.com.vn",305],["dantri.com.vn",306],["ecci.com.vn",307],["fptshop.com.vn",308],["haiquanonline.com.vn",309],["nld.com.vn",310],["tamlinh247.com.vn",311],["tapchikientruc.com.vn",312],["thanhtra.com.vn",313],["thoidai.com.vn",314],["petrotimes.vn",314],["thuongtruong.com.vn",315],["thuysanvietnam.com.vn",316],["trithuc24h.com.vn",317],["voh.com.vn",319],["congluan.vn",[320,321]],["congly.vn",322],["dangtinbatdongsan.vn",323],["realty.vn",[323,357]],["danviet.vn",324],["docbao.vn",325],["kienthucykhoa.edu.vn",327],["eva.vn",328],["fshare.vn",329],["game24h.vn",330],["game8.vn",331],["gameio.vn",332],["gamek.vn",333],["soha.vn",333],["gametv.vn",334],["genk.vn",336],["giaoducthoidai.vn",337],["vnews.gov.vn",338],["plus.gtv.vn",339],["helpex.vn",340],["hoc24.vn",342],["hosocongty.vn",343],["kenh14.vn",344],["kinhtedothi.vn",345],["minhngoc.net.vn",345],["vn-z.vn",345],["lazi.vn",346],["luatvietnam.vn",347],["lucloi.vn",348],["muare.vn",349],["myeva.vn",350],["phunumoi.net.vn",352],["nhipcaudautu.vn",352],["nhacdj.vn",353],["nhatrangclub.vn",354],["olug.vn",355],["phapluatplus.vn",356],["reatimes.vn",358],["rung.vn",359],["sharecode.vn",361],["softonic.vn",362],["startalk.vn",363],["stockbiz.vn",364],["thethao247.vn",366],["thethaovanhoa.vn",367],["thitruongtaichinhtiente.vn",368],["tinnhanhchungkhoan.vn",370],["tiin.vn",371],["timdaily.vn",372],["tinhte.vn",373],["tintucvietnam.vn",374],["truyenfull.vn",375],["tuyengiao.vn",377],["tvphapluat.vn",378],["v4u.vn",379],["vietfones.vn",380],["vietnamgsm.vn",381],["vietq.vn",384],["viettelstore.vn",385],["vungoctuan.vn",387],["webthethao.vn",388],["yellowpages.vn",390],["chillhay.xyz",392],["plvb.xyz",395]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
