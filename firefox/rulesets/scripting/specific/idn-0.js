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

// ruleset: idn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".popbox","#popup_bawah,\n#popup_box","[href=\"https://klik.gg/anoboy\"],\n[href=\"https://klik.gg/anoboyvip\"]","#headads","#ptbanner","#top-banner","#ads","#le_header_ads","#ouibounce-modal","#sgpb-popup-dialog-main-div-wrapper",".sgpb-popup-overlay",".kln","#teaser3",".ads","#fbanner","#fbbanner","#hbanner","#pbanner","#teaser1","#teaser2","#floating_bot","#floatbottom,\na[href][target=\"_blank\"] > img[src$=\".gif\"]","#floatcenter",".adsrow",".lepopup-popup-container,\n.lepopup-popup-overlay",".banner-float-bottom-2.banner-float-bottom",".under-player-ad-mobile","#repop","#floating_bot.btm_ban","#floating_banner_top1",".box_item_berlangganan_popup","a[href^=\"https://cek.to/\"]",".mfp-inline-holder.mfp-s-ready.mfp-container",".mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile.mfp-bg",".lazyloaded.loaded.ads-50","#overplay",".sgpb-popup-dialog-main-div-wrapper","#floattop,\n#top6",".banner-img","#btm_bannerMobile","a[href^=\"http://bit.ly/\"]","a[href^=\"https://goo.gl/\"]","#semprotpokemon_3,\n#semprotpokemon_4",".lazyloaded.ls-is-cached.bannerdua,\n.lazyloaded.ls-is-cached.bannersatu,\n[href^=\"https://137.184.194.29/\"]","[href^=\"http://rebrand.ly/\"]","#KD_adpB,\n.krucil_ads",".banner-float-bottom","#fixedban","#iklantengah1","#tutupen,\n[href=\"https://bit.ly/idx-xx\"]","[href^=\"https://bit.ly/\"]",".headbanner",".ban_empat",".adscenter",".teaser3","div[id^=\"floating_banner_bottom\"]","#advertisement","#overlay",".warning-modal",".sgpb-popup-overlay.sgpb-popup-overlay-19287.sgpb-theme-1-overlay,\n[href=\"https://yukclick.me/oploverzpopluxury111\"]",".underlay","#iklap,\n#iklhead,\n#jwp_gmn_adss","#promoContainer",".blocker.jquery-modal",".jwseed",".kln.mlb.blox",".wp-image-80765.size-full.alignnone",".banner-left,\n.banner-right","[href^=\"http://bit.ly/\"]","#kayan_reklam_sag,\n#kayan_reklam_sol",".contentlist","[href^=\"https://manjur.id/search.php\"]",".td-header-rec-wrap",".sg-popup-content","#middle-banner","#ptbanner.row","div[class^=\"adsgen\"],\ndiv[class^=\"mobileads\"]",".lmd-iklan","#popup_content","a[href=\"http://www.filmxy.cc/download/\"],\na[href=\"http://www.filmxy.cc/watch/\"]","#tengah > span","tbody",".imgbanner","#floating_banner_left,\n#floating_banner_right",".textwidget > p","#wrap > .headborder > .headcontent > .textwidget","#col,\n#tengah,\n#tengahaa,\ndiv.content-kuss",".klikdisini","#fadeinbox","#filmoncereklam","a[href^=\"https://bit.ly/\"]","a[target=\"_blank\"][rel=\"nofollow\"] > img[src$=\".gif\"]",".home.border","#banner-tengah","[href$=\"/sukamovieclub\"]","[href^=\"/GoUrl.php?ads=\"]",".pop-overlay","[href^=\"http://152.44.32.81\"]","#btm_banner",".iklansamping,\n.klnrec,\n.sidebar_right,\na[rel=\"nofollow\"] > img[src*=\"bp.blogspot.com\"],\na[rel=\"noopener\"] > img[src*=\"bp.blogspot.com\"]","#bioskop-kiri,\nbioskop-kanan",".hilang2","#modal","#myModal,\n.modal-content","#playerOverlay","a[href^=\"https://shope.ee/\"]","iframe[style*=\"z-index: 2147483647\"]",".td-banner-wrap-full","#div-Inside-MediumRectangle",".ad-photo,\n.commSkin__fluid--left.commSkin__fluid,\n.commSkin__fluid--right.commSkin__fluid,\n.mb3.gpt-ad-head-wrapper.widget",".cls-outstream","#advertisement-2",".banner-fix-bottom,\n.banner320x480,\n.bannerhead,\n.closebanner1,\n.closebanner2",".ayu-headads","#energysaving",".banner","img[width=\"720\"][height=\"90\"]","#floatads1",".middle-ad-cont",".anm__flying--ads-holder","a[href^=\"http://anizan.slask.pl/go.php\"]","#billboard",".underlay-ad","a[href=\"http://162.144.35.114/\"]","#billboard_banner,\na:nth-of-type(2),\ntd:nth-of-type(3)","#floating_banner_bottoms","#floating_banner_tops","#wrap > center",".headborder:nth-of-type(5)",".sidebarborder:nth-of-type(2)","#floating_banner_top",".textwidget img",".adsPushdown,\n.billboardBig.billboard,\n.billboardBottom,\n.billboardFlying,\n.billboardFlyingBanner,\n.billboardFlyingFix,\n.billboardFlyingInner,\n.billboardLeaderboard.billboard,\n.billboardPushdown,\n.billboardRectangle.billboard,\n.billboardTop.billboard,\n.flying_carpet_show,\n.flying_carpet_show_inner,\n.skyscrapper--left,\n.skyscrapper--right","#floating_banner_bottom2,\n#floating_banner_top img[width=\"728\"][height=\"90\"]","#HTML2,\n.lalulintas",".ads-on,\n.ads__stick--left,\n.ads__stick--right,\n.ads_below_photo",".ads-partner-wrap",".ads__top-big,\n.cls-composite,\n.cls-geniee,\n.float-ads",".mgidclsbanner",".pushdown-banner",".wpa","#adsic728,\n#adsic7282",".ad","#hbanner:nth-of-type(1)",".adstops",".side:nth-of-type(7),\n.side:nth-of-type(8),\n.side:nth-of-type(9)","#sgcboxOverlay",".megabillboard",".mr1-scrollpage-height,\n.mr2-scrollpage-height","#adv-caption-mr1","#adv-caption-mr2",".footer_banner",".paraA.para,\n.para_abs,\n.para_fix,\n.paradetail",".Widget:nth-of-type(2),\n.Widget:nth-of-type(3)","#ads-728,\n#ads-960-mid,\n#ads-mid,\n#mid-banner,\n.ads2-home,\n.fixed-ads-atas,\n.mid-banner","#adpoint5,\n#adv-caption-lead,\n#leaderboard[style*=\"width: 750px;height: 100px;\"],\n#megabillboard-desktop,\n#otp_banner,\n#skinad,\n#sto_banner,\n#top_banner,\n.ads-slot,\n.banner_inside_article,\n.detikads,\n.normalbanner,\n.otp_banner_close,\n.parallax_abs,\n.sisip_video_ds,\n.skinad_1,\n.skinad_2","#bottom_banner",".bb_banner",".dewa_floating_bottom","[href^=\"http://www.dukungbpjs.com/ref.php\"]","#ads-stack,\n#close-ads-stack,\n#itro_opaco,\n#itro_popup","#float-bottom-banner",".visible-lg",".ads_square_banner,\n.section_sticky_ads_bottom",".banner-common",".left.banner-vertical,\n.right.banner-vertical","#peluang",".ktzsingle-bannerright",".pps-single-popup",".random","#footer_sticky_inside",".adsense-header-in-article",".box","#jxOutstreamContainer",".ads-liftdown,\n.clearfix.ads__top-big250,\n.read__left",".ads__boxr",".blocker-notice,\n.blocker-overlay","#balloonads,\n#parallaxdetail,\n.ads-scrollpage-container,\n.ads-scrollpage-height,\n.billboard__banner","#ads-float,\n#solopos_float,\n.bottom-fix","#bannerkategoriheader,\n#mybannerpopup,\n#mybannerpopup2",".article-bottom-ad,\n.article-desktop-ad",".spb_middle.spb_banner","#text-28 > .textwidget,\na[href^=\"http://www.pembesar-vimax-herbal.com/\"]","[style=\"float:right; margin:7px 0 10px 10px;\"] > small",".parallax-ad",".sponsor_ads:nth-of-type(1),\n.sponsor_ads:nth-of-type(2),\n.sponsor_ads:nth-of-type(4)","#floating_ads_bottom_textcss_wrap",".top-banner",".adBar-vertical.left,\n.adBar-vertical.right","#IklanIDGS,\n#bottombanner",".ktz-banneraftercontent","#headerbanner","#baca_juga,\n#more_stories,\n#title_kanal,\n#vertical_top_kanal",".aligncenter,\n.sidebar-widget:nth-of-type(1),\n.sidebar-widget:nth-of-type(3),\n.sidebar-widget:nth-of-type(4)","#player-side-right","._ning_link.strack_cli","#anchormasklink",".bt-g1.b-g3.wb-300x100,\n.bt-g1.b-g3.wb-300x250","#bannerkiri",".d.wp-120x600,\n.wb-300x250","img[style=\"width: 125px; height: 125px;\"]","img:nth-of-type(2)","[class^=\"ad-\"][class*=\"-container\"]","#banner-popup,\n.gmr-banner-afterrelpost,\n.gmr-banner-logo,\n.gmr-footerbanner,\n.gmr-topbanner,\n.gmr-verytopbanner","#hello",".adv-space","#leaderboard",".bottom-frame-banner-close-btn,\n.bottom-leaderboard-cont,\n.skycapper","#v5-marcommpromotion.home-right-box,\n#v5-marcommpromotion2,\n#v5-showcase3,\n#v8-leaderboard","#v5-showcase1,\n#v5-showcase2",".ad2","#blockblockA",".ads__under__image",".textwidget img[width=\"300\"][height=\"250\"],\ncenter img[width=\"728\"][height=\"70\"]","#left-skyscraper,\n#right-skyscraper,\n.ad.b300x250","#floatbanner","#credential_picker_container,\n#crt-225c8f8a,\n#crt-4f9f1ad0,\n#crt-f6d317f5,\n.ads-latest-wrap,\n.ads-on-body,\n.adsMR1Lipsus1,\n.bannerAdB,\n.bannerCenter,\n.bannerCenter1SubRubrik,\n.bannerCenter2SubRubrik,\n.bannerCenterRubrik,\n.bannerR,\n.bannerR2,\n.bannerR2A,\n.bannerR3,\n.bannerR3A,\n.bannerTopOut,\n.boxBanner1,\n.boxBanner3,\n.boxBannerR1akt,\n.boxSkinAd,\n.clearfix.kcm__big.kcm,\n.clearfix.kcm__horizontal.kcm,\n.clearfix.kcm__rectangle.kcm,\n.clearfix.kcm__sticky.kcm,\n.clearfix.kcm__top.kcm,\n.clearfix.kcm__tower.kcm,\n.clearfix.kcm__track.kcm,\n.hAds,\n.kcm-track-sticky,\n.kcm__articleList,\n.kcm__stick--left,\n.kcm__stick--right,\n.kcm__superbig.kcm,\n.native-wrap,\n.ol_big_inner,\n.premium_div,\n.show.ol_promo,\n.video-box-wrap,\n[src^=\"https://adsimg.kompas.com\"]","iframe[title=\"3rd party ad content\"]",".bannerTop1",".w340.r-ads.right > ul > li",".banner-center,\n.banner-mgid",".banner-dable.banner,\n.banner-gennie.banner,\n.banner-mgid-read.banner,\n.banner-right-big.banner,\n.banner-right.banner,\n.mb20.mt20.banner-dable-read.banner","#bannertheme_left,\n#bannertheme_right",".adssingle,\na[href=\"http://kshowid.com/advertising/\"]","center",".banner_box",".banner_main,\n.leftcontent[style=\"padding:0px; margin:0px auto; height:250px; width:720px; border:0px; background:none; \"]",".img-banner","#idcomboard1.com-728x90,\n#idcomright1.com-300x250,\n#idcomright2.com-300x250,\n#idcomsensebox1.com-300x250,\n#idcomsky1.com-160x600,\n.ctnitem.ctncom","#lht2_lesson_after_vocab2_300x250_phone,\n#lht2_lesson_bottom_300x250_phone,\n#lht2_lesson_top_320x50_phone,\n#lht_base_bot_320x50_phone,\n#lht_lesson_right2_300x250_desktop,\n#lht_lesson_right_300x250_desktop",".box-ads-right","#float-banner","#rotating",".ad_990_80",".hero_adslot","#aa,\n#close,\n.mas_tamvan","#lbanner","img[width=\"240\"][height=\"240\"]",".masthead","#floating_ads_bottom_textcss_container",".banner-top,\n.bannercol,\n.bannerfloat,\n.bannerpos,\n.cell_banner_inside","#ad-genie-container,\n#div-paralax-container",".js-tower-sticky.clearfix.kcm__tower.kcm",".nkt__stick--left,\n.nkt__stick--right",".spnsr-top,\n.vip-info,\n[class^=\"spnsr-top-\"],\n[class^=\"spnsr-wrapper-\"]",".in.modal-backdrop","#fab","[href^=\"//wizliebeg.com/\"]",".box_item_berlangganan",".sitemaji_banner","#nbpopx-wrapper,\n.jx-ads.nobar-ads","#left_ads_float_phonedevelop,\n#under-video-ads,\n.mask-ads","#wrap > table","#sidebar-right,\ncenter > table",".bannermovie,\n.banners",".content-kuss-ikln","#fatas","#fbawah,\n#previewBox2","#previewBox4","#floatbawah","[href=\"https://www.ocanoke.com/\"]",".center-ban,\n.detads,\n.rc-ad-300x250,\n.skyscrapper,\n.sponsored-belt468x60",".center-paralax,\n.flying_ads",".banner-zone",".r-ads",".alignnone.size-large.wp-image-458","#cont-megabillboard",".float-ck","#float-left,\n#float-right",".sg-popup-builder-content",".lazyloaded.ads-50,\n.sgpb-popup-dialog-main-div-theme-wrapper-6",".semprotnenenmontok_2",".c-message > div:nth-of-type(1)","#me-div-gpt-ad-parallax,\n.clear.size-wide-custom.dummy",".ujipopup","div[style=\"height:260px;\"]",".margin-right-40.left.pullquotes,\ndiv.ad-before","#forum_ads_8,\n#sodasusu_ads_side_left,\n#sodasusu_ads_side_right,\n#teaser4",".adds-top.add,\n.banner-top-m.widget-ads-top,\n.placeholder_expose,\n.placeholder_leaderboard,\n.placeholder_medium,\n.placeholder_r1,\n.placeholder_r2,\n.placeholder_r3,\n.placeholder_read_body,\ndiv.placeholder_pariwara",".\\33 .Premium.Sundul,\n.\\34 .Premium.Sundul","#right_ads_float_phonedevelop,\n.overlay","div[style=\"position:absolute; top:20px; left:45px; width:70px; background:#000; text-align:center;\"]","#fancybox-wrap","#fancybox_ajax,\n.advertisement_box1,\n.advertisement_box2","#banner-atas,\n#banner-bawah",".expandable-bottom-sticky","div[data-testid=\"featuredShopCntr\"],\ndiv[data-testid=\"topadsCPMWrapper\"]","#idb3","#div-Right-MediumRectangle-1","#div-Top-Leaderboard","#anchorads,\n#bannerku,\n#bannerkubawah,\n#boxright [style=\"width:300px; height:250px;\"],\n#div-Center-FullBanner-1,\n#div-Center-FullBanner-2,\n#div-Tribunnews-Home-Center-2-FullBanner,\n#skinads,\n.ads-placeholder,\n.ads-placeholder-inside,\n.belanja-picks,\n.content [style=\"width:160px; height:600px;\"],\n.ovh[style=\"width:468px;height:60px\"],\nimg[src*=\".pgi.tribunnews.com/\"]","#div-Right-MediumRectangle-3","#boxleft > .mb20",".avert","#an-Modal,\n.reveal-modal-bg","img[width=\"320\"][height=\"105\"]",".banneritem",".code-block-3.code-block","#Ad300B,\n#Ad728","#aside img[width=\"300\"][height=\"250\"],\n#lAds,\n#rAds,\n#simplemodal-container,\n#simplemodal-overlay",".download,\na[href^=\"https://144.126.241.203/\"]","[href=\"http://click2go.me/aksesklik4a\"]","#teaser5","#previewBox3","#flobwh,\na[href^=\"https://rebrand.ly/\"]",".show.popup","#floatbot,\n.appup",".mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile","#floatbanner-bottom",".nyaa300,\n.nyaa728",".adsbygoogle",".sidebar > .klan300",".box-ads--container",".bausastra-ads",".affcoups",".inf_infusionsoft_popup","div.ui_adblock","#TopBannerBg",".bnr",".banner-sc,\n.banner-sc2,\n.col-banner,\n.masonry-brick.drm-banner-x.drm-artikel:nth-of-type(3)",".header__kasad,\n.kasad-h",".flying_carpet_div,\n[style=\"height:0; min-height:180px;\"]","#adsoutsream,\n.heightads250","#fixslowshow","#dablewidget_RoOGdzom,\n#div-Skycrapper-Stocksetup,\n.heightads600.pad-t.pad-r.pad-l.pad-10,\n.heightads90.ads-middle-list-news,\n.text-center.center.width-px-1100","#Kolom-random-300,\n#iklan-dalam-postingan-300,\n#overlay[style=\"display: block;\"],\nimg[style=\"border:0;display:block;\"]","#top-banner-parallax,\n.banner-parallax",".adsense",".description-ads",".ads-120__left,\n.ads-120__right,\n.ads-160,\n.ads-160-600,\n.ads-300-video,\n.ads_160x600,\n.ads_970x250,\n.set-ads-468,\na[style=\"width: 100%; height: 100%; display: block; position: fixed; z-index: 1\"]","#otp_ads,\n.portlet.sideskycrapper","#bottomframe-ad,\n#skinframe-ad-left",".ad-inventory-wrapper","a[href^=\"http://www.apktiga.com/p/start-download-reayus.html\"]","#detailSkinAdLeft,\n#detailSkinAdRight",".ads-mr,\n.ads__skyscraper,\n.ads_sky,\n.clearfix.ads__horizontal",".mt20.top1,\ndiv.banner-r","#div-top-banner-transparent",".ads_sticky_footer",".ads-sticky-left,\n.ads-sticky-right,\n.bg-grey.text-center.p-0.mb-3.mt-3,\n.mb-4.bg-grey.text-center",".ad-box-wrappr,\n.row > .show-desktop > div,\n.underlay-ad-text-box",".nkt__stick","#main-banner-middle,\n.legend_banner-container,\n.stickybanner",".gambar_pemanis",".ftadss",".parallax_ads,\n.widebanner.banner,\ndiv.showcase.banner,\ndiv.skycrapper.banner","[href^=\"https://scratchy-trick.com/\"]",".cls.code-block-center",".lepopup-popup-loader",".banner-skin--left,\n.banner-skin--right,\n.banner__giant.banner,\n.banner__left.banner,\n.banner__right.banner,\n.banner__top.banner",".ads-popup__inner",".ads.single_post_content,\n.animated.ads",".adbox","#bkgOverlay,\n#bn-premium,\n#delayedPopup,\n#premium,\n.d-sidebar,\n.skinner-left,\n.skinner-right,\n[id^=\"gpt-inline\"]",".box-ads-300x250",".text-align-center.box-ads-content",".in_up_ad-area",".cads","#ilang2",".modal",".box-banner","#floating_ads_bottom_textcss2",".wait","[href=\"javascript:showHideGB()\"],\n[href^=\"http://dwatngkas.\"],\na[href^=\"http://cocobet.\"]","#ilang1",".adv",".bannersinglefot","#googlebox","#floatbtmleft,\na[href^=\"//angel4d.com/\"],\na[href^=\"//telolet4d.com/\"]",".iklanSUKI",".slot-iklan",".float_tengah,\n.separator","#iklanFloat,\n.iklan,\n.modal-backdrop",".lenyap",".ad-float-image",".rsABlock","a[href=\"https://klik.fun/Kp7S5\"]",".col-xs-12.col-md-6.col-lg-6","#previewBox",".wpb-outer-wrap",".bot.ads","ins.adsbygoogle","#float-pop","#overlay-pop","#fancybox-overlay","[href=\"http://bit.ly/adsvbola\"],\n[id^=\"yui-gen\"].postcontainer",".bm.overlay","a.bnner","[href=\"https://klik.fun/ZyslX\"]",".top-bnner.lazy","[href=\"https://144.126.241.203/invite/c6c83up\"],\n[href=\"https://bit.ly/anoboySG88\"],\n[href=\"https://kliksaya.info/mcdanoboy\"]",".adbtm,\n.bh-ad,\n.block-bh-googledfp,\n.center-block.img-responsive",".cari-ads",".td-banner-bg.td-banner-wrap-full","#Taboola_widget,\n#rec_ad4,\n.tonal__standfirst",".adplaceholder-mrec",".code-block-6,\ndiv[data-ub-carousel]","#sadl,\n#sadr",".ktz_banner","#sct_banner_top,\n#videoad1",".ads-header-5","#bmpop_adpB","img.aligncenter",".cfmonitor","#banner-popup-desktop",".idmupi-topbanner","#banner-right",".clearfix.act2-970x90:nth-of-type(1),\n.clearfix.act2-970x90:nth-of-type(3)","img[width=\"1020\"][height=\"350\"]","#semprot_ads_side_left,\n#semprot_ads_side_right","#jsemrp_372_719,\n#jsemrp_373_873,\n#jsemrp_374_469,\n#jsemrp_380_290",".semprotpokemon_1,\n.semprotpokemon_2",".coliklan",".cm-popup-modal",".banner3",".blox","#floatads2,\n#floatads3",".anuads","a[title^=\"manga4d\"]","#openpopunder","#adrandpop,\n#aplikasi",".mvic-btn",".sidebarborder:nth-of-type(4),\n.sidebarborder:nth-of-type(5)","#floatads,\n.active.adde_modal-overlay,\n.adde_modal_detector-show.adde_modal_detector","a[href^=\"//bit.ly/\"]","#videoOverAd","#tutup,\n#tutup2","#float-atas",".header-banner","#lmd-iklan",".swal-overlay--show-modal.swal-overlay",".s-sponsor","#popuppress-9119,\n#top-banner-content","#main-popup",".banner-middle","[class*=\"banner\"]","a[target=\"_blank\"][rel^=\"noopener noreferrer\"] > img[src$=\".gif\"]",".kzl-header.kzl","[href=\"https://klik.gg/manhwadesu\"]",".iklan-tengah","[href$=\"/referral/nontoncinema\"],\na[href^=\"http://referral.\"]",".box_banner","[href=\"//dumbpop.com/help.xml\"]","#largebanner","table","#ffbp-bg,\n#ffbp-body,\n#ffbp-close","[href^=\"http://linkalternatif.\"],\n[href^=\"https://tinyurl.com/\"]",".btm_ban",".setdah","a[rel^=\"nofollow noopener\"] > img[src$=\".gif\"]","#ffbp,\n#popup",".gmr-bannerpopup,\n.idmuvi-floatbanner,\n[href^=\"//avgirls.asia/\"]",".add,\n.mobi.content-left,\n.mobi.content-right","#wpb_overlay,\n.wpb-image-popup.wpb-main-wrapper","#epmblock,\ndiv:nth-of-type(2) > div > .btn-block.btn-lg.btn-success.btn",".hidden-xs",".page > div:nth-of-type(4) > div:nth-of-type(1),\ndiv:nth-of-type(4) > div:nth-of-type(2)",".av-content-full,\n.glx-link,\n.glx-teaser",".adsincenter","#bannerhomefooter","#ftadsth",".ik-overlay","#player-side-left","#home-bnner-content","#home-bnner2-content,\n.reklam-goster-sag,\n.reklam-goster-sol","#directorio > .random > center","#sidebar_right > .side:nth-of-type(5) > .textwidget,\n#sidebar_right > .side:nth-of-type(6) > .textwidget,\n#sidebar_right > .side:nth-of-type(7) > .textwidget,\n#sidebar_right > .side:nth-of-type(8) > .textwidget,\n#sidebar_right > .side:nth-of-type(9) > .textwidget",".bannerwrap","#previewBox1","#top-bnner-content",".ads-big,\n.ads-foot,\n.ads-right2,\n.container_skinad",".fancybox-skin",".navbar-brand.bot,\ndiv[id^=\"previewBox\"]",".ads728-slot-panjang",".banner-premium","[class=\"sc__wrp\"]","[class^=\"xnxx5-\"]",".tutup.banner","#content > div:nth-of-type(1)","#playerOverplay"];

const hostnamesMap = new Map([["agenbokep.co",[0,96]],["agenbokep.guru",[0,96]],["agenbokep.pro",0],["anoboy.digital",[1,90,300,301]],["anoboy.media",[1,301,390]],["anoboy.watch",1],["anoboy.ink",2],["bioskopkeren.beauty",3],["bioskopkeren.bond",3],["bioskopkeren.sbs",3],["ayononton.co",4],["layarkaca21.com",[4,14,16]],["lk21tv.com",[4,5,74,161,231,232]],["terbit21.cool",4],["dunia21.cx",[4,5,74]],["bioskopkeren.dev",[4,5]],["dunia21.green",4],["layarkaca21.web.id",[4,14,15,16,17]],["158.69.0.212",5],["terbit21.cafe",[5,74,75]],["movies21.co",[5,74]],["bioskopkerenin.com",[5,68]],["kebioskop21.com",5],["lk21.web.id",[5,40,231,364]],["sinemaindo.web.id",[5,40,231,358,368]],["terbit21.in",5],["kebioskop21.online",5],["ganool.watch",[5,74]],["ganool21.watch",5],["cctvbokep.bet",6],["dutasex.bio",6],["perawabokep.cam",6],["perawanbokep.cam",6],["cctvbokep.help",6],["budiarto.id",[6,313]],["cinemaindo.web.id",[6,14,16,17,358,359]],["malemjumat.ink",6],["malemjumat.lol",6],["malemjumat.mom",6],["dutasex.top",6],["filmapik.tv",6],["5.182.209.205",7],["filmapik.kim",7],["filmapik.sbs",7],["filmapik21.space",7],["149.102.130.200",[8,29]],["207.244.225.48",[8,60]],["154.12.229.9",[8,29]],["drakorindo.best",[8,68]],["giladrakor.com",8],["gudangmovies21.lol",8],["mangakita.net",[8,11,12,50,98,418]],["gatsunime.org",[8,436]],["indosemi45.org",8],["manhwaid.org",8],["layarkeren.site",8],["gudangmovies21.skin",8],["kazemanga.xyz",[9,269]],["65.108.132.145",[10,18,19,35,36]],["oploverz.bz",[10,35,73]],["sebokep.com",[10,269,270]],["oploverz.top",[10,11,12,18,19,35,73]],["45.12.2.2",[11,12,30,48]],["107.152.37.223",[11,53,54]],["15.235.11.45",[11,12,18,35,36,59]],["157.245.12.72",11],["komikindo.co",[11,105]],["komikstation.co",[11,106]],["manhwalist.com",11],["mareceh.com",11],["nontondramaseri.com",11],["oploverz.fan",[11,12,18,19]],["anoboy.id",11],["kiryuu.id",[11,106]],["manhwaindo.id",11],["isekaisubs.web.id",[11,18,19,22]],["oploverz.co.in",11],["oploverz.info",[11,12,18,19,35]],["westmanga.info",[11,376]],["komikcast.io",11],["komikdewasa.me",[11,12]],["komikindo.me",11],["manhwaindo.me",[11,12]],["manhwaland.mom",11],["kazefuri.net",[11,415]],["mangashiro.net",[11,18,90,419]],["mirrorkomik.net",[11,420]],["animasu.nl",[11,429]],["mangakyo.org",[11,12]],["anichin.top",11],["manhwaland.top",11],["oploverz.tv",[11,12,18,19]],["anichin.vip",11],["komik18.art",[12,65]],["komikdewasa.art",[12,66]],["bioskop201.biz",[12,19,69,70]],["animasu.cc",[12,77]],["bioskop21.co",[12,101]],["bioskopgalaxy21.com",[12,19,127,130]],["doujinlands.com",12],["downloadfilmbaru.com",[12,19,160]],["layarbiru21.com",12],["lmanime.com",12],["realmscans.com",[12,18,19]],["warungkomik.com",12],["22cinema.download",[12,19,302]],["nontonmovie.web.id",[12,14,15,17,19,143,366]],["luciferdonghua.co.in",12],["filmbaru.in",[12,19]],["luciferdonghua.in",[12,18,19]],["pemersatu.link",12],["sektedoujin.lol",12],["komikmanhwa.me",[12,388]],["kumapoi.me",12],["mangaindo.me",12],["kikil.net",12],["komiku.net",[12,19,416]],["movie76.net",[12,19,125,127,130]],["ganool.nl",[12,19]],["ganool.ph",[12,19,377]],["cinemaindo.stream",[12,18,19,144]],["cinemaindo.tv",[12,18,19,466]],["animexin.xyz",[12,22]],["kanzenin.xyz",12],["kuramanime.xyz",[12,50,479]],["95.216.163.177",13],["192.99.70.18",[13,44]],["samehadaku.cam",[13,21,22]],["22cinema.com",[13,113]],["topgans.blogspot.com",13],["dapurpacu.com",[13,154]],["dewanontons.com",[13,158]],["download-lagu-mp3.com",13],["embed.dramanices.com",13],["duniafilm21.com",13],["kompas.com",[13,136,139,216,217]],["smallencode.com",13],["samehadaku.day",[13,21,22,23]],["embed.dramacool.es",13],["republika.co.id",[13,329]],["komikindo.info",13],["dunia21.ltd",13],["k-vid.net",13],["otakuindo.net",13],["neumanga.tv",[13,18]],["cinema-indo.com",[14,15,17,143]],["filmbagus21.web.id",14],["filmbagus21.info",[14,359]],["ganool.li",14],["layarkaca21.net",[14,15,16,17]],["nonton21.net",[14,15,17,143]],["lk21.org",[14,15,16,17]],["layarkaca21.tv",[14,15,471]],["lk21.tv",[14,15,471]],["lk21.me",15],["film-ganool.co",[18,19]],["cinemaindo.com",[18,19,144,145]],["film-ganool.com",[18,19,169]],["filmroster.online",18],["bioskopmovie.tv",[19,465]],["ruangbokep.bond",20],["sibokep.bond",20],["ruangbokep.sbs",20],["streamingbokeponline.site",20],["ruangbokep.top",20],["streamingbokeponline.top",20],["kamarbokep.xyz",20],["kebokepanku.xyz",20],["samehadaku.run",[21,22,23]],["149.28.158.117",22],["212.32.226.234",22],["awsubs.co",[22,98,99]],["anixlife.xyz",22],["samehadaku.win",23],["shinigami.id",[24,348]],["51.81.238.0",25],["128.199.102.111",26],["193.178.172.113",27],["157.245.195.114",28],["75.119.147.12",29],["194.163.158.12",29],["45.67.231.215",29],["89.117.61.35",29],["46.149.76.81",29],["81.0.220.98",29],["cinema-indo.co",29],["zonafilm.icu",29],["nontonlk21.live",[29,130,379]],["kawanfilm21.online",[29,50]],["kawanfilm21.pro",[29,50]],["194.163.183.129",[30,31]],["37.49.229.132",[32,33]],["juraganfilm.icu",[32,307]],["216.155.135.144",34],["oploverz.best",35],["oploverz.love",35],["80.209.252.146",37],["164.68.127.15",38],["194.233.87.224",38],["154.26.132.73",38],["bokepmobile.fun",38],["103.194.170.153",39],["xtubecinema.club",[39,95]],["xtubecinema.top",39],["46.166.167.16",[40,41,42]],["lk21.cam",40],["nekopoi.care",[40,76]],["nekopoi.cash",[40,76]],["gudangmovies21.cc",40],["indomovies.club",40],["indoxx1.club",[40,86]],["bioskop168.co",[40,92,100]],["filmbioskop21.co",40],["layarmovie21.co",40],["nontonsub.co",40],["01nonton.com",40],["123drakor.com",[40,41]],["bioskop45.com",[40,41]],["idbioskop.com",[40,41]],["nonton-streaming.com",40],["nonton789.com",40],["nontongratis88.com",40],["nontonmovie81.com",40],["nontonsub.com",[40,90]],["sashahillfilm.com",40],["semprot.com",[40,42,271]],["semprotku.com",[40,42]],["thirdstarfilm.com",40],["layarkacaxxi.id",40],["meownime.id",40],["zonabola.id",40],["nekopoi.lol",[40,76]],["animeboy.me",40],["nontonani.me",40],["nontondrama.me",40],["ns21.me",[40,41,52]],["sukamovie.mobi",[40,51]],["gandhool.net",40],["indomv.net",40],["nonton33.net",[40,41]],["satujiwa.net",40],["bioskop168.online",[40,100]],["layarxxi.online",[40,432]],["bioskop168.pro",[40,90,100,446]],["lk21.rip",40],["dewamovie.tv",40],["drakorindo.tv",[40,41]],["filmroster.tv",40],["ganoolmovie.video",40],["bioskopkeren.club",41],["bioskopxx1.com",41],["moviebaru21.com",[41,117]],["serunonton.com",41],["awsubs.id",41],["bioskopkeren.online",41],["indoxxi.top",[41,90,463,464]],["ns21.top",41],["bioskopkeren.xyz",41],["188.166.39.172",43],["173.199.167.192",45],["krucil.com",45],["krucil.net",45],["139.99.33.192",46],["164.68.105.199",47],["drakorindofilms.net",47],["bokepid.wiki",[47,476]],["173.249.49.204",49],["139.99.33.205",50],["139.99.120.222",[50,52]],["185.231.223.76",[50,61,62]],["gudangmovies21.cfd",50],["pecintabokep.club",[50,91]],["21filem.co",50],["bioskop45.co",50],["lk21go.fun",50],["manganime.in",[50,371]],["www.nontondramas.net",50],["movieajip.online",50],["otakudesu.watch",50],["gm21.xyz",50],["139.99.33.210",51],["bokepfull.fun",51],["videocrot.org",[51,366]],["nontonserial.com",[52,256,257,258]],["nonton21.tv",[52,257,258,303,378]],["film21terbaru.org",[54,98]],["139.99.61.225",55],["94.237.74.225",56],["streamingbokeps.co",[56,111]],["149.56.24.226",[57,58]],["kricom.id",57],["gomunime.biz",62],["68.65.123.84",63],["didrakorindo.com",63],["simontok.cx",63],["simontok.ink",63],["avtub.io",63],["sukanonton.online",63],["indoxxi.pictures",[63,445]],["indoxx1.pw",[63,450]],["avtub.sx",63],["indoxx1.art",64],["indoxxi.bz",64],["mangaceng.com",65],["dewabioskop21.asia",67],["dewabioskop21.org",[67,187,433,434]],["b201.info",[69,373]],["kabarviral.blog",71],["lewat.club",[71,87]],["mediapermata.com.bn",72],["terkini.id",[72,352]],["cafecinema.cc",78],["lk21.io",78],["dramamu.net",78],["filmxy.cc",79],["lk21.cc",[80,81]],["dunia21.top",[80,90]],["dutafilm.cfd",82],["dutafilm.observer",[82,430]],["dutafilm.us",82],["bioskop007.club",[83,84]],["bioskop55.club",[83,85]],["bioskop1080.com",83],["bioskop90.com",[83,128,129]],["cinema007.com",83],["cinemastar21.com",[83,89]],["nontononline99.com",83],["bioskop55.me",[83,130]],["bioskop90.me",83],["bioskop212.net",[83,89]],["apk.miuiku.com",87],["nf21.club",88],["nontonfilm21.club",89],["sinema21.id",89],["ns21.club",90],["animeindo.co",90],["idxxi.co",90],["lk21indo.co",90],["lk21xxi.co",90],["bioskopbos.com",90],["dramaind.com",90],["filmbioskop21.com",90],["lk21n.com",90],["nontondramas.com",90],["otakufile.com",90],["bioskopkeren.fun",90],["lk21c.fun",[90,304]],["subindo.id",90],["animebatch.web.id",90],["eka.web.id",[90,360]],["kazefuri.web.id",[90,363]],["mangaku.in",[90,365]],["lk-21.me",90],["neonime.net",90],["nontongratis88.net",90],["anoboy.org",90],["nontonbioskop21.org",90],["cinemaindo.pro",90],["layarindo21.pro",90],["animeku.tv",90],["semi168.club",92],["sukamovie.club",[93,94]],["indoxx1.co",93],["idxxx1.com",[93,186,187]],["sidrama.com",93],["akurat.co",97],["benfile.com",98],["blifnews.com",98],["kabar2.com",[98,206]],["mangacanblog.com",[98,235]],["semuaberita.com",98],["mangaku.web.id",[98,365]],["nusareborn.in",98],["fastdrama.co",[102,103]],["hkfree.co",102],["iyottube.co",104],["iyottube.com",104],["komikcast.com",106],["bacamanga.id",106],["komikindo.id",[106,343]],["nontondramaonline.co",107],["nontondramaonline.net",107],["www.parapuan.co",[108,109,110]],["bolasport.com",[108,110,135,136,137,138,139]],["www.sonora.id",[108,242,349]],["tempo.co",112],["90animax.com",114],["animebatchs.com",[115,116]],["goblintvfree.com",115],["merdeka.com",[115,238]],["nanime.in",115],["juragan-anime.net",[115,414]],["anixverse.com",117],["astroawani.com",118],["autonetmagz.com",119],["bagas31.com",120],["beritasatu.com",[121,122]],["detik.com",[121,147,148,149,150,155,156]],["bioskop19.com",123],["bioskop78.com",[124,125,126,127]],["nonton33.com",126],["bioskop99.me",[126,380]],["bioskop99.mobi",126],["nonton33.tv",126],["juragantomatx.com",[127,130]],["juraganmovie.net",[127,130]],["sejutafilm.com",129],["nontonganool.net",[129,422]],["bioskopstar88.com",130],["cinemaqq.com",[130,146]],["bioskoptigalima.com",131],["icinema3satu.net",131],["bisnis.com",132],["blogspot.com",133],["starringheavenlyrics.blogspot.com",134],["gridoto.com",[135,139,173,174,175]],["www.grid.id",[136,337]],["kompas.tv",[138,173,470]],["cdramabase.com",140],["ceritasexindonesia.com",141],["clip.cewecewe.com",142],["cnbcindonesia.com",[147,148]],["haibunda.com",[147,148,150,156,177]],["cnnindonesia.com",[148,149,150,151,152]],["teknoup.com",[151,282,283]],["comotin.com",153],["pikiran-rakyat.com",[156,266]],["inet.detik.com",157],["dewantn.com",159],["dunia21tv.com",[161,162]],["cinema-indo.web.id",[161,162]],["layarcinema.tv",[161,162]],["duwitmu.com",163],["dwanonton.com",[164,165]],["dewanonton.vip",[164,474]],["eramuslim.com",166],["faktabali.com",167],["filem456.com",168],["gadgetren.com",170],["gamebrott.com",171],["gopego.com",172],["motorplus-online.com",[175,241,242,243]],["gudangpemain.com",176],["harianjogja.com",178],["solopos.com",178],["hdtvku.com",179],["hellosehat.com",180],["hipwee.com",181],["hotabis.com",182],["iberita.com",183],["idntimes.com",184],["sindonews.com",[184,273]],["idpelago.com",185],["lapar.com",[187,225,226]],["nontonitu.com",187],["indobokepz.com",188],["indogamers.com",189],["indonesiamovies21.com",190],["indosiar.com",191],["indotelko.com",192],["indoxtream.com",193],["indoxx1.com",194],["idxx1.top",[194,387,462]],["indoxximovie.com",195],["inilah.com",[196,197]],["kompasiana.com",[196,220]],["ekonomi.inilah.com",198],["teknologi.inilah.com",[198,199]],["isdaryanto.com",200],["jakbos.com",201],["jalantikus.com",202],["jendelakaba.com",203],["jenismac.com",204],["k-vid.com",205],["dramacool.io",205],["dramanice.io",205],["kabar24.com",207],["kapanlagi.com",[208,209]],["otosia.com",209],["m.kapanlagi.com",210],["kertashitam.com",211],["klikanggaran.com",212],["www.hops.id",212],["klikseru.com",213],["komikbaru.com",214],["komikstation.com",215],["tribunnews.com",[217,288,290]],["indonesiasatu.kompas.com",218],["otomotif.kompas.com",219],["www.kompasiana.com",221],["kotakgame.com",222],["kshowid.com",223],["kuyhaa-me.com",224],["gigapurbalingga.net",224],["loveindonesia.com",[225,233]],["ld2tv.com",227],["lensaindonesia.com",228],["www.lingohut.com",229],["liputan6.com",230],["lk21.pw",231],["malaysiakini.com",234],["mangafap.com",236],["info.mapsaddress.com",237],["info.vebma.com",[237,295]],["info.gambar.pro",[237,295]],["mgkomik.com",239],["modifikasi.com",240],["grid.id",[243,335]],["mydramalist.com",244],["nanimex1.com",245],["negumo.com",246],["nekonime.com",247],["neonime.com",248],["neonime.vip",248],["ninemanga.com",249],["nobartv.com",250],["nontonbokeps.com",251],["nontonfilm77.com",252],["nontonfilm88.com",253],["nontonme.com",254],["nontonplus.com",255],["fb21.tv",[257,258,303,468]],["dunia21s.fun",[258,303]],["lk21.li",[258,303,378]],["nontonsini.com",259],["dl.ocanoke.com",260],["okezone.com",261],["news.okezone.com",262],["oktavita.com",263],["otomania.com",264],["palingseru.com",265],["readwebtoons.com",267],["remo-xp.com",268],["siherp.com",272],["tetew.info",272],["greget.space",272],["sinemakaca.com",274],["bioskopxxi.net",274],["situshp.com",275],["smartphoneku.com",276],["sodasusu.com",277],["suara.com",278],["sundul.com",279],["susterbokep.com",280],["tabloidbintang.com",281],["idfl.me",[282,384,385]],["r-l.me",[282,384]],["tempointeraktif.com",284],["thejakartapost.com",285],["tokopedia.com",286],["topfilmz.com",287],["blog.tribunjualbeli.com",[288,289]],["makassar.tribunnews.com",291],["wartakota.tribunnews.com",292],["webdesign.tutsplus.com",293],["unixmen.com",294],["waralabakan.com",296],["windowsreport.com",297],["wowkeren.com",298],["zonabola.com",299],["nomat.fun",305],["lk21.host",306],["layardrama21.icu",308],["animeindo.id",309],["apkmod.id",310],["radarlombok.co.id",310],["novelgo.id",310],["paraedu.id",310],["hightech.web.id",[310,362]],["nama.web.id",310],["batch.id",311],["beautynesia.id",312],["ceklist.id",314],["alona.co.id",315],["cerpen.co.id",316],["chip.co.id",317],["cosmogirl.co.id",318],["anime17.net",[318,398]],["dream.co.id",319],["kaskus.co.id",320],["katadata.co.id",321],["kontan.co.id",322],["pusatdata.kontan.co.id",323],["stocksetup.kontan.co.id",324],["lihat.co.id",325],["orami.co.id",326],["pontianakpost.co.id",327],["pricebook.co.id",328],["viva.co.id",330],["log.viva.co.id",331],["wartaekonomi.co.id",332],["filmterbaru.id",333],["ggwp.id",334],["nextren.grid.id",336],["inews.id",338],["www.inibaru.id",339],["investor.id",340],["jurnalisindonesia.id",341],["kabargames.id",342],["komikcast.net",343],["komikindo.pro",[343,448]],["manganime.id",344],["medcom.id",345],["slurr.my.id",346],["onlinemetro.id",347],["tek.id",350],["terasjakarta.id",351],["tirto.id",353],["uzone.id",354],["internetpositif.uzone.id",355],["animeindo.web.id",356],["animeindo.video",356],["animekompi.web.id",357],["ganool.web.id",361],["mangaku.site",[365,460]],["resep.web.id",367],["suki48.web.id",369],["zigi.id",370],["nanimex.in",372],["senimovie.info",[374,375]],["senimovies.net",374],["ganool.is",377],["ganool.se",[377,454]],["ganool.st",377],["doroni.me",381],["dunia21.me",[382,383]],["dunia21.net",383],["dunia21.org",383],["dunia21.wtf",383],["idtube.me",[386,387]],["xx1.me",389],["bharian.com.my",391],["mforum.cari.com.my",392],["hijabista.com.my",393],["majalahpama.my",393],["nona.my",393],["vanillakismis.my",393],["utusan.com.my",394],["mediahiburan.my",395],["rasa.my",396],["youtube-mp3.my",397],["animeindo.net",399],["awnime.net",400],["bintangmawar.net",401],["cinema-indo.net",402],["dramaqu.net",403],["duniaku.net",404],["filmace21.net",405],["filmbagus88.net",406],["filmku.net",407],["funtasticko.net",408],["gadismalam.net",409],["harakahdaily.net",410],["ibugil.net",411],["indoxxi.net",412],["inidramaku.net",413],["kurazone.net",417],["nobarfilm21.net",421],["sangetods.net",423],["seri168.net",424],["torjack.net",425],["tvkabel.net",426],["unyil.net",427],["zonapanaz.net",428],["indobokep.pro",428],["bokepml.online",431],["dwa21.org",[433,435]],["kumpulmanga.org",437],["manhwadesu.org",438],["nanimex.org",439],["nontoncinema.org",440],["otakuindo.org",441],["pakbos21.org",442],["pkspiyungan.org",443],["satujiwa.org",444],["bokepkita.pro",447],["otakudesu.pro",449],["layardrama21.rest",451],["file.rocks",452],["lonteku.sbs",453],["cmovieshd.se",[454,455]],["hdfree.se",456],["myasiantv.se",457],["ganol.si",458],["komikcast.site",459],["komikcast.vip",459],["mangaku.vip",460],["samehadaku.skin",461],["indoxxi.tv",[463,469]],["elde.tv",467],["xx1.tv",469],["ns21.tv",472],["ns21.us",472],["drakorasia.us",473],["kurina.vip",475],["goblintv.xyz",477],["indostreamings.xyz",478]]);

const entitiesMap = new Map([["agenbokep",0],["anoboy",[1,2]],["bioskopkeren",[3,4,5]],["layarkaca21",[4,14,15,16,17]],["dutasex",6],["perawanbokep",6],["filmapik21",7],["gudangmovies21",[8,9,10]],["komikcast",11],["komikdewasa",[11,12]],["oploverz",[11,12,18,19]],["komikindo",13],["samehadaku",[13,21,22,23]],["ruangbokep",20],["streamingbokeponline",20],["shinigami",24]]);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
