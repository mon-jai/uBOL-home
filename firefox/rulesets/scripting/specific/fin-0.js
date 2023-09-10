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

// ruleset: fin-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["div[id*=\"AdContainer\"]","#block-annonsblockx6,\n#block-bilwebbenmobileteaser,\n#block-googleaddesktopinsider,\n#block-marknadenmobileteaser,\n#block-stickyannons,\n#block-views-block-bilwebben-block-1,\n#block-views-block-company-ads-block-1,\n.editorial-ad,\ndiv[id|=\"block-googleadmaincontent\"]",".mobileads",".elementor-location-header .topp","#petition_page_top_ad","#div-ad-below-message,\n.pageWidth > div[style=\"min-height:90px;text-align:center;margin:auto;\"],\n.sidebar > div[style=\"min-height:250px;text-align:center;margin:auto;\"]","[href^=\"https://tc.tradetracker.net/\"],\ndiv.text-center.col-sm-6 > a[rel$=\"nofollow\"]","#block-local-offers-widget-front,\n.optionset-imported-ads,\n.revive-block,\n.view-imported-ad-ams",".ad.right-col-box,\n.banner-slot-box,\n[class^=\"banner-slot-preroll\"]",".text-link[href*=\"&utm_medium=banner&utm_campaign=\"],\n.text-link[href^=\"https://clk.tradedoubler.com/\"]",".ad-slot,\n.mobile-leaderboard-container,\n.resize-container","div[id^=\"dfp__\"]",".ad-container","a[href*=\"bannerTrack\"]","#outstream,\n.pnad-container",".td-post-content > .social-share ~ *",".bc--grey-neutral-50,\n.card-article-ads","#topBanner","a[href*=\"tema.fi\"]",".affilistaukset,\n.leovegas,\n[class^=\"mstila\"],\na[href^=\"https://ads.expekt.se/\"],\na[href^=\"https://ads.mrgreen.com/\"],\na[href^=\"https://promo.leovegas.com/\"],\na[href^=\"https://stake.com/\"],\na[href^=\"https://www.expekt.com/\"],\na[href^=\"https://www.leovegas.com/\"],\ndiv[class=\"artikkeli_body\"] > p:first-of-type > a[href$=\".gif\"],\ndiv[class=\"artikkeli_body\"] a[href*=\"-Expekt-\"],\np img.alignnone[src$=\".png\"][alt=\"\"][width=\"2560\"][height^=\"20\"]","div[id|=\"almad\"]","a[aria-label=\"Mainostaja\"],\na[aria-label=\"Mainostajan linkki\"]","#billboard,\n#logopal,\n.flexibox,\n.shopster,\ndiv[class*=\"adbox\"],\ndiv[style=\"background: rgb(246, 66, 100) none repeat scroll 0% 0%; color: rgb(255, 255, 255); padding: 20px;\"]","#ipsLayout_mainArea > center,\n.ipsLayout_sidebarright,\n[data-nbenhadv]","#findance_desktop-top,\ndiv[id^=\"adslot_content\"],\ndiv[id^=\"adslot_sidebar\"]","#page-body > div[style=\"width:728px; margin:0 auto; padding:10px 0;\"]",".futis-sticky-footer[data-futis-trackbid]",".adv-link",".advr_box,\n.mvp-side-widget.widget_text,\n.pum-overlay,\n.wp_rss_retriever + div[style^=\"margin-top:\"],\n.wp_rss_retriever[style^=\"background:\"],\n[class^=\"top-banner-\"],\n[data-advadstrackid],\n[href=\"https://bonuspanda.com/fi/\"],\n[href=\"https://casinogorilla.com/fi/nettikasinot/\"],\n[href=\"https://pussit.com\"],\n[href=\"https://www.halvinlaina.fi\"]","#gp-natives,\n.ad-separatator,\n.carousel-cell--native,\n.content-continues-after-ad,\n.golfliitto-articles__commercial,\n.main-native,\n.native-carousel,\n.search-results > .section--ad__mob,\n.section--ad__panorama,\n.section--ad__rectangle,\n.section-native-list,\nbody.bbpress > .content-wrapper .section--ad",".td_block_template_1.td-a-rec-id-custom-spot.td-a-rec.td-block,\na[href$=\"koronaavastaan.fi/?ref=metrotuotanto\"]",".td-a-rec-id-sidebar","A[href=\"http://www.satshop.fi\"]",".boxi","div[class|=\"g g\"]","#cmorelink,\ndiv[class=\"block block-block\"]",".adv,\n.adv_content,\n.adv_side",".custom_banners_big_linkbefore-content,\n.custom_banners_big_linkwidget,\n[class^=\"custom_banners_big_linkcontent\"],\n[id^=\"_ning_zone_\"]","#mini-panel-autodoc_150x50,\n.gam-holder",".kiekk-footer-sticky[data-kiekk-trackbid]","[style^=\"text-align:center;margin-left:auto !important;margin-right:auto !important;height: 420px; margin-top:60px\"]",".oxy-modal-backdrop",".block-mainos","#secondary #block_widget-4,\n.bannerma,\n.code-block",".banners","a[href*=\"adsrv\"],\ndiv[class=\"main-bottom\"]",".addme","[href^=\"https://www.kasinokaverit.com/\"],\n[href^=\"https://www.lainaovi.fi/\"]",".lead-collector-cta","#ad-300x150,\n#ad-300x300,\ndiv[class=\"ad230x90\"]",".ads",".pnadg-container","[href$=\"/pitkavetovihjeet/\"]",".mvp-post-ad-wrap","div[aria-label=\"Siirtymisruutu\"] ~ div[data-max-width=\"2400\"] + div[class]","#bottom-offer","#banneri_yla,\n.banner.content",".advert",".paid-content-wrapper",".mtv-player-ad-container",".widget_ads_carousel,\n.widget_hintaopasbestprice,\nSECTION[id*=\"hintaopaspopular\"]","[href=\"https://www.kasinokaverit.com/ilmaiskierroksia-nettikasinoilla/\"],\n[href=\"https://www.nainen.com/lainoja-kilpailuttamalla-saastat-aikaa-ja-rahaa/\"]",".homepage-adspot","#banner_area,\n.lazyLoadInhouseBanner,\n.topBannerMinHeight,\n[class*=\"pt\"][class*=\"pb\"][style*=\"border-top:1px solid #b3b3b3\"]","#homeBottomBoxBanner,\n#homeTopBoxBanner,\n#huge_banner,\n#largeViewHouseBanner,\n.huge-banner,\n.inh_banner_nl,\n.leftAdvDiv,\n.listing:not([data-id]):not(.tricky_link_listing),\n.quick-search__banner",".itemlist > li:not(.block_list_li)","[class=\"center\"][style=\"padding-top:15px;\"]","div.nc_r_banner","#smallViewHouseBanner","#offer,\n#tulos-etu",".samBannerUnit,\n.samCodeUnit,\n.td-header-sp-recs",".js-notices.notices--block.notices","#nav + div[style=\"text-align:center;min-height:280px\"]",".strossle > div[class*=\"post-ad\"]","a[href^=\"https://pelaajat.com/out/\"] > img,\na[href^=\"https://www.freelaskutus.fi/\"]","#adiniframe_oikealaita_container,\n#bookingnostokuvasarjassa,\n#mainos .ilmoitus,\n#pm_mp_kotisivu,\n[id^=\"pm_mp_tekstissa\"]",".adv_ads_ad_unit","center","a[href*=\"banner\"]",".banner-slot-preroll","[href^=\"http://ads.leovegas.com/\"],\n[href^=\"http://www.primeslots.com/\"],\ndiv#panorama_container,\ndiv[style=\"font-size:14px;line-height:21px;padding-top:6px;\"],\ndiv[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"] + [type=\"text/javascript\"] + div,\ndiv[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"] + table[width=\"468\"] + div,\nscript[src^=\"http://adserving.unibet.com/ad.aspx\"] + div[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"],\ntable[width=\"468\"]","[href$=\"/nettikasinot/\"],\n[href$=\"/nettikasinot/\"] + .dropdown-toggle","[data-bottom-floater]","a[href^=\"https://on.vallila.fi/\"],\np a[href^=\"https://related.iittala.com/\"]",".adf-placement-top",".annons",".panorama-wrapper",".advertisement","#mvp-leader-wrap,\n.clever-core-ads,\n.uutis-footer-sticky[data-uutis-trackbid]","#text-8,\n#text-9","#secondary a[href^=\"https://diamondbeverages.fi/\"],\n#secondary a[href^=\"https://wihuri.metrotukku.fi/\"]",".advertising",".service-ad-panel",".teaser-ad__background",".ticker--promo-10,\ndiv[class] > a[href^=\"https://tilaa.sanoma.fi/\"]","[data-info-container-text^=\"MAINOS\"]","div[class$=\"nativead\"]",".teivo-sidebar","[href=\"/tilaa-lehti\"]",".vaihtuvamainos,\ndiv[class=\"w-full md:w-2/5 pt-6 md:pt-0 pl-0 md:pl-8\"]",".ugaam-archive-ad-wrapper",".box--full.grid__container.clearfix,\n.magazineorderwidget__content",".sidebar-block > a[href^=\"http://pubads.g.doubleclick.net/gampad/clk\"],\n[href*=\"paratiisi.fi\"]","#front_after_menu,\n.latest_sima,\n.soliloquy-link,\n.widget.sima",".widget_nativearticles",".frontpage-banner,\n.native-comms","[class*=\"ad__component\"],\n[class^=\"Ad__AdRoot\"]",".ads-parade-wrapper,\na[href^=\"https://www.arvopaperi.fi/kumppanisisallot/\"][target=\"_self\"]:not(section > a)","[class*=\"p2m385-\"]",".head.the-wrap,\n[id|=\"bunyad-widget-ads\"]",".pb[lazied]","#pb_bottom,\n.box_dt,\n[href^=\"/clk\"]","#pb_top","div[class*=\"advertorial\"]",".teaser--ad",".front-page-ad-padding,\n.front-page-advertisement","#cm-banner",".pb,\n.pb0","#rt-sidebar-b",".advs",".ad-wrapper,\n.widget_caravanlehti-ad,\nmain section.block-notices","[id^=\"afscontainer\"]",".px-4.py-2.border-b.border-gray-200.bg-white.w-full,\ndiv[class=\"flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-x-4\"][style=\"min-height:500px;\"]",".poppartners","div[data-recommendation-type=\"ad\"]",".md\\:bg-gray-200.md\\:max-w-full.md\\:px-4.md\\:py-4","div.min-h-\\[450px\\]","div[style=\"min-height:450px;\"]",".wrepper.mx-auto > .row[style=\"margin-bottom:20px\"]","div[class^=\"AdStyles__Wrapper\"],\ndiv[class^=\"OrderMagazinestyles__Container\"]","[data-banner-horseshoe]",".ni_holder",".js-fragment-web-lazy_carousel","._ning_outer","[id|=\"adni_widgets\"]",".compareGoogleCell","#div-leeadsFullpageAd,\n.article-ad-container,\n.commercial-row","div[id^=\"article-ad\"]",".dls-loaded",".bg-elisa-dark","#tilt-ad-top-stay-away","div[class^=\"ad\"]",".page-notes > .note--highlight","#annonsspalt,\n#leaderboard,\n.annonspekare",".sponsoredrow",".alp-advert",".thirstylinkimg","[href^=\"https://online.adservicemedia.dk/cgi-bin/click.pl\"]","#ad_global_below_navbar",".Advertisement__Box,\n.Advertisement__Box--with-padding,\n.Advertisement__Top,\n.FrontPageSpots__Ad",".banner-wrapper,\n.banner_middle",".in-list-ad-containers",".detailLeaderboard",".map-ad,\n[class*=\"adBox\"],\ndiv[class^=\"AdBlock_adContainer\"]",".widget_custom_html","div[id|=\"inline-banner-mobi\"]",".elementor-element-228d8bca,\n.elementor-element-24aa8e2,\n.elementor-element-9e2ec43,\n.elementor-widget-container > [href^=\"https://northernmarketing.fi/\"]",".gofollow","#adContainer,\n#ad_topScroller,\n#bigVideoAd_content,\n#eventad,\n#sky2_1,\n#sky2_2,\n.ad_video,\n.itsanad,\n.rwd.colthin > div,\n.sponsor,\n.videoAd,\ndiv[class^=\"ad_Bumper\"],\nsection.artistyle3.rightbox:nth-of-type(1)",".is-advertorial,\ndiv[id|=\"div-gpt-ad\"]",".adsbygoogle + script + br",".content.single-banner,\n.top.panorama.banner,\na[rel=\"lightbox[palvelut]\"]",".td-a-rec-id-content_inline,\n.ylapala",".bg-advertorial,\n.dre-item--feature-advertorial","#sp-alabanneri,\n.autoboksi.moduletable",".jattiboksi.moduletable",".banneritem","[data-test-id=\"ad\"]","#banner-top",".any-commercial","#googlejs,\ndiv[class*=\"sub-container\"]","[id|=\"hv-wrapper-top\"],\na[href^=\"/ohjaus.php\"],\ndiv[class=\"hv-wrapper-left-item\"],\ndiv[class=\"hv-wrapper-right-item\"]",".outsider-ads",".header-container__ad-container,\n.page-index__adholder,\ntr.rahalaitos__desktop.rahalaitos",".default-banner-size",".ab-test-metered-softwall,\n.aldente-wrapper,\n.for-no-subscription.html-is-seuraa-myynti-bf.html-is-seuraa-myynti,\n.hs-advertorial,\n.hs-ticker-sales,\n[id^=\"aldente-mobi\"],\na.block[href*=\"/mainos\"],\narticle[class*=\"bg-native-ad\"],\ndiv[class*=\"-ad-block\"],\ndiv[class*=\"ad-container\"]",".grid--dfp-slots",".pane-sbase-cts-native-native-front","#paraati-ad-grid,\n.-ad1.-ad.sidebar__column-item,\n.right-now-widget__item--commercial","div[data-lazy-ad-unit-id]",".alennuskoodi-column-embed,\n.article-list a[href] > .article-sponsored,\n.card.eo-embed-container,\n.center.category-list-embed,\n.commercial-list-item,\n.etua-widget-container,\n.etuovi-react-embed,\n.front-sponsored-ad,\n.leiki-container-markkinapaikka2.leiki-container,\n.parade-ad-container,\n.recommendation-carousel-svod.recommendation-carousel,\n.slider-content,\n.telkku-ads,\n[class|=\"almad-mobile-parade\"],\ndiv.footer-wrapper__item.is-visible.LazyLoad,\ndiv[class=\"iframe-container\"]","div[class=\"footer-ylempi\"]","[class^=\"mainospaikka\"]",".button-mainos,\n.footer-1.footer.footer-widgets",".structItem--thread[data-author=\"Mainos\"]","#text-7","div.sadblob-loading","section.sbs-articleitems[data-module_position_id=\"814\"]",".c-box-space:not(.c-box)","#ipsLayout_sidebar .ipsBox:not([data-blocktitle=\"Member Subscriptions\"]),\n.ipsSpacer_both,\n[data-role=\"sidebarAd\"] + br","[href=\"https://www.nettikasinovertailu.info/\"]",".collab,\n.collaboration,\n.emp-ad","[src^=\"https://kaasujalka.fi/assets/banners\"]",".ad-mob_description,\n.placeholder","#native-list-wrapper,\n#native_text_wrapper,\n.native.feed_box_container","#puff-container,\ndiv[class=\"lyta-lazy-load\"]","#outstream-container","#sidebar .simple-image > [href]:not([href^=\"https://kamera-lehti.fi\"]),\n#sidebar .widget[id|=\"custom_html\"]",".kaupallinen-general,\n.ksnote","a[href=\"https://www.kielletytkirjat.com/\"],\na[href^=\"https://revoltnoir.com\"],\ndiv[id^=\"ads\"]",".elementor-element-2770b68,\n.elementor-element-3e26be8,\n.elementor-element-44ffbd5,\n.elementor-element-54b7f6f,\n.elementor-element-abfd7ba",".breaking-news-container,\na[href=\"https://punamustamedia.portal.worldoftulo.com/v2/shop/dtabkaiku\"]","aside > div[class] > a[href*=\"/kumppanisisallot/\"]",".blogi__nosto,\n.kl-sima--blocks > [href^=\"https://www.kauppalehti.fi/kumppanisisallot/\"]","#search-top-wide-ad,\n#specific-bottom-rectangle-ad,\n#specific-bottom-wide-ad,\n#specific-openinghours-rectangle-ad,\n#specific-top-wide-ad",".kiint-adlabel,\n.kiint-widget",".bannerlink","app-ad",".banner","#traktorpool-ad",".promo",".article-continues,\n.card--is-sponsored",".wp-block-otavamedia-google-ad-slot","#nmbc,\n.artikkelim-jatkuu,\n.headerau,\n.ktbanner,\n.thirstylink","#kaikki-tarjoukset,\n.sbbyks",".campaign-teaser-show,\n.gtm-banner,\n.wg-banner","#middle,\ndiv[class*=\"banner\"]",".fusion-carousel",".g-1","#content1-container",".tilaa-tasta,\n.ylabanner1",".box-banner a[href^=\"/redirect/\"],\n.fullwidth-imagebanner,\n.hasordercontent.orange-bg,\n.mainbanner",".adremark,\n.popup-overlay",".header-widget [href^=\"https://aslinkhub.com/\"]","div[class^=\"FeedList__AdWrapper-\"]",".middle-ad-container",".ennensisaltoa,\n.lmbanner",".type-banner",".article-blocks-2022-divider:not(.article-block--2022 + .article-blocks-2022-divider),\n.asuntorauma-promo,\n.page-section--commercial,\n.palvelupankki-banner,\naside[class=\"sidebar\"] > [class^=\"advertisement ad advertisement\"] + [class^=\"advertisement ad advertisement\"] + section[class^=\"article-list\"]:last-of-type,\ndiv[class^=\"advertisement\"]","#kokosisaltoid","div#sponsor","div[class*=\"ArticleTeaserGroup_nativeAd\"]",".header_banner,\n.textwidget","div[class|=\"ad-section\"]","div.structItem.is-prefix53","a[href=\"https://mailapro.fi/\"],\na[href=\"https://urheilutuet.fi/\"],\na[href=\"https://vesikourut.fi/\"],\namp-layout[amp-access^=\"popups.\"][role=\"button\"]","aside > div[class] > a[href=\"/kumppanisisaltoa\"]","div[class^=\"NativeAdSpotlight__Component\"],\ndiv[class^=\"pageFeed__topAdSlot\"]","div[class*=\"feed__adSlot\"]",".aprofit,\n.section--native-left,\n.teaser--partner,\n.teaser-top-banner--partner,\n[data-set=\"main-ad\"]",".NoAdBlocker_main",".Index_native-ads",".Article_native-ads,\n.in-text-ad-slot-wrapper","a[data-ga-teaser-name=\"PartnerContentTeaser\"],\nbody:not(.is-style-kumppanisisallot) :is(aside, section) a[href^=\"https://www.mikrobitti.fi/kumppanisisallot/\"]",".elementor-widget-container > a[href^=\"https://sortter.fi/\"]","#header_ad33,\n#ostoHint,\n.banner-ad,\n.execphpwidget,\n.header_ad, important,\n.headermob_ad,\n.single-content-all > div[style^=\"float:left\"][style*=\"width:100%\"][style*=\"text-align:center\"][style*=\"margin-bottom:17px\"],\n.singlehinta.header_ad,\n.textwidget > div[style=\"width:300px; height:600px;\"],\n.tops-bar,\nbody.category > div .header_ad,\ndiv[class^=\"article_ad\"]",".block--monsterfi-ads,\n.epiq-landing-row--frontpage-leaderboard-ad","#tori.article-car-list,\n.category-kumppaniartikkeli.moottori_kumppani.smallfeature,\n.container.g-bg.ads.sidebar.item,\n.kumppaniartikkeli-sidebar.smallfeature,\n.narive-ad,\ndiv[class|=\"ad-rotation\"]",".ad-panorama,\na[href*=\"revads\"],\ndiv[class$=\"ad-giant\"]",".component-adincontent.component,\n.component-soniaincontent,\n.leaderboard,\n.sonia-container",".ppas,\ndiv[data-testid=\"endorsement\"]",".add-banner",".promotional_banner_root","#banneriwrapper,\n.mobilead",".mob_panorama",".panorama","div[style^=\"min-height:\"][style$=\";text-align:center\"]","div[style^=\"min-height:\"]",".node__content .block[class$=\"kampanja\"],\n.topbar,\ndiv[id^=\"block-credigo\"]",".advertoriaalit",".mainos-top","#sidebar [href=\"https://www.loytotex.fi/tarjoukset\"],\n.CMAC_AdChangerWidget.widget",".online-ad-container,\n.online-teaser--advertorial","[aria-label=\"Linkki mainokseen\"]:not([href^=\"https://kauppa.palloliitto.fi/\"])","div.views-injected-row.views-row,\ndiv[class=\"main-container header-container container-fluid\"]",".preroll-text,\n.text-ad-container",".ad","a[href=\"/category/mainos/\"]",".omamainos-PIR",".ad-assigned.panoraamabanneri",".after-ad,\n.before-ad,\n.jattiboksi,\n.natiivimainos,\n.paraati",".widget_media_image > a[href=\"http://dimex.fi\"]",".proje-widget,\n.uusi-ylabanneri","div[class=\"wpb_wrapper\"]","section.sbs-articleitems[data-module_position_id=\"640\"]",".block-radiovoima-advertisements",".FrontPage_native-ads","div#kauppa_hot,\ndiv[id^=\"banner\"],\nimg#js_ad",".ad-info-bar,\n.front-page-box-ad,\n.lomakone-results-skyscrapers,\ndiv[id|=\"lomakone-resultads\"]","#adslot_bottom,\n#adslot_search,\n#topslot,\n.adslot_right,\n[href=\"https://www.suomi24.fi/lainaa/yhdista-lainat/\"]",".ad-container-wide",".category-mainos,\ndiv[id|=\"retki\"][style]","body.home div[style^=\"margin-left: auto; margin-right: auto; text-align: center;\"] + .wp-block-separator,\ndiv[style^=\"margin-left: auto; margin-right: auto; text-align: center;\"] .is-external-link",".top-banner",".riist-content","a[href*=\"subaction=bannerredirect\"]:not(a[href*=\"-rv-tilaus\"])",".RuutuPlayer__Error-sc-1o2b3la-0",".panoraama_etus","article[data-section=\"kaupallinen yhteistyö\"]",".article-item.column-mainospaikka",".section--full-size-ad-carousel","body.page:not(.home) .g.g-3",".view-2019-ajankohtaiset-tarjoukset,\n.view-banneripaikka-etusivuoikea1","#auto-grid-container-5c470b0150cba",".has-ads,\na[href^=\"http://www.lainanvalittaja.fi/\"],\na[href^=\"https://autonvaraosat24.fi/\"],\na[href^=\"https://www.autodoc.fi/\"],\ndiv[id$=\"paraati\"],\ndiv[id|=\"banner\"]","#layout-banner-right",".banner_wide,\n.site-footer__banners",".ad_class,\n.om-adcoin-ad","div[class=\"site-header__top-container header-top-banner\"]",".ast,\n.editorial-slots,\ndiv[class*=\"Ad__AdWrapper\"],\ndiv[class^=\"HomePage__HeaderAd\"],\ndiv[id^=\"viihdes24_desktop-sidebar\"]",".bannerTop.S24_banner","div[class*=\"FooterAdWrapper\"],\ndiv[class*=\"HeaderAdWrapper\"],\ndiv[class*=\"__AdWrapper\"],\ndiv[class^=\"RightSidePanel__AdContainer\"]",".asp,\ndiv[class^=\"Vaalikone__HeaderAdWrapper\"]",".artikkelimainos,\n.headermainos,\n.natiivilinkit",".ad-banner-lift",".mainos_banner1,\n.widget > a[href^=\"https://www.nettikirjakauppa.com/\"]","body:not(.is-style-kumppanisisallot) a[href^=\"https://www.talouselama.fi/kumppanisisallot/\"]:not(section > a)",".bannerarea",".sidebar-banners","a[href=\"https://sinitaivas.com/kauppa/\"]",".siteHeader-widgetArea,\n.widget [href^=\"https://www.autodoc.fi/\"],\n.widget [href^=\"https://www.topautoosat.fi/\"]",".commercial-bottom.commercial,\n.commercial_wrapper,\n.node-promoted.node-teaser,\n.paragraph--type-ad","[class|=\"adform\"]",".CategoryPriceGuide_price-guide,\n.NativeAdHolder_native-ad-holder,\n.PriceGuide_price-guide,\ndiv.Article_nettix-embed-container","a[href^=\"/tyopaikat/kumppanisisalto-tyopaikat/\"],\naside > div[class] > a[href^=\"https://www.tekniikkatalous.fi/kumppanisisallot\"],\ndiv#skyscraper-height-div > div > aside > div > div > a[href^=\"https://studio.tekniikkatalous.fi/\"],\ndiv#skyscraper-height-div > div > section > div > a[href^=\"/kumppaniblogit/\"],\ndiv[class][width=\"980\"],\nsection > div > a[href^=\"https://www.tekniikkatalous.fi/kumppanisisallot/\"]",".ad-blocks",".advertisement-banner-row","div[class|=\"ProductRecommendationCarousel__CarouselContainer\"]",".bannerit-banneripalkki","div[id^=\"ad-slot-\"]","[class*=\"block-boxes-ad-300x250\"]","#header-standard-container,\n[data-testid^=\"div-gpt-ad-\"]","#front_big_event,\n#front_big_event > span","div[id^=\"Nostemedia_Desktop\"]","[class^=\"mainos\"]:not(:only-child)",".ctaad","[data-mobile-ad-unit-id]","aside > div[class] > a[href^=\"https://www.tivi.fi/kumppanisisallot/\"],\nsection > div[class] > a[href^=\"https://www.tivi.fi/kumppanisisallot/\"]","#banner_panorama_bottom,\n#footer_partner_links,\ndiv#banner_panorama_topmost,\ndiv#panorama_top,\ndiv#panorama_topmost","div[class*=\"adViewPage_maxWidthWrap\"]:not(div[class^=\"adViewPage_adWrap\"])",".appnexus-container",".billboard","[class=\"tsv3-c-common-article__contentad notloaded\"],\n[data-readpeakurl^=\"https://app.readpeak.com/ads/\"],\ndiv[class*=\"tsv3-c-common-smart noad-hideaction\"]",".slideshow","#main > .ads","#right-sidebar,\n.adsanity-single,\n.top-bar",".cat-kaupallinen-yhteistyo","#auto-grid-container-5c40764673d19","[data-test=\"mainTeaserColumn\"][href^=\"https://www.uusisuomi.fi/kumppanisisallot/\"],\naside [data-test=\"tabs\"] [href^=\"https://www.uusisuomi.fi/kumppanisisallot\"],\naside [href^=\"https://track.adform.net/\"],\naside [href^=\"https://www.ilmarinen.fi/\"]",".partner-blog-list,\n.side-list.commercial-blog-studio,\na[class*=\"commercial-blog-card\"]","div#etuoviVVAdPrototype",".widget_block","img[src^=\"https://ads.v2.fi/\"]:not([src$=\"discomainos.png\"], [src$=\"facebookmainos.jpg\"], [src$=\"instamainos.jpg\"], [src$=\"twittermainos.jpg\"], [src$=\"youtubemainos.jpg\"])","#bodyarea td[width=\"100%\"][valign=\"top\"] + td[valign=\"top\"]","div.display-ad",".online-promotion-bar",".AutomaticDfpWidget,\n.DfpWidget",".type-advertorial",".sdaelem.td-block-span12,\n.vausda","[href^=\"https://kampanjat.is.fi/\"],\na[href$=\"vauvabanneri\"],\na[href=\"https://www.is.fi/alennuskoodi/\"],\ndiv.cts-row-wrapper,\ndiv[id^=\"aldente-\"]",".ads_carousel-2.widget",".page-ad__location,\n.vu-adlabel,\n.vu-content-injected-middle,\narticle.rp-lift.featured-post,\nsection[id^=\"front-page-parade\"],\nsection[id^=\"front_page_parade\"]","[id|=\"gpt-slot-billboard\"]",".banner-mainos,\n.mobiiliylabanner,\ndiv[class*=\"artikkeliad\"],\ndiv[class*=\"artikkelimainos\"]",".d-md-block.d-lg-block.d-none,\n.kumppani-artikkelit,\ndiv[class*=\"native-article\"] > div[class=\"ezrichtext-field\"] > p > a[href^=\"https://danskebank.fi/\"],\ndiv[class^=\"banner\"] > a[href=\"https://www.viisasraha.fi/Taloushaltuun\"]",".td-a-rec,\n.td-post-content .code-block,\n[href^=\"https://in.matsmart.fi/t/\"],\n[href^=\"https://track.adtraction.com/\"],\ndiv[id|=\"nm-300x300\"]",".article-sponsored,\na[class=\"article-item articlestream-item unloaded\"][data-sponsored=\"1\"],\nsection[class^=\"sbsads\"] + section[class^=\"sbs-articleitems full-size-list\"][data-module_position_id=\"612\"]",".voima-banneri-etusivulla",".widget_media_image",".mobile-top-ad",".adBanner",".advertisement-slot,\n.commercial",".bfastmag-a-d-v,\na[href=\"https://ostalohjalta.fi\"],\na[href=\"https://ostavihdista.fi\"]",".ad[class*=\"panorama\"],\n.ad[class*=\"paraati\"],\n.ad[class*=\"ylaboksi\"],\n.tarranurkka,\na[href^=\"/artikkeli-kaupallinen-\"]",".b-area-ad-sidebar,\n.b-otavamedia-ads,\n.gb-otavamedia-ad,\n.s-area-ad-header,\n.wrap-top-ad,\ndiv[class$=\"kaupallinen-yhteistyo\"]","#fel-ad-banner","a[href=\"https://www.jurinet.fi\"]",".ad2",".jp_adsense_ad_container",".ad-article",".tdm-pricing-wrap,\n.tdm_block_pricing,\n.wpforo-ad,\na[href^=\"https://affmore.com/\"],\na[href^=\"https://record.njordaffiliates.com/\"]","#hise-items-container","div[id^=\"open_\"]","kc-ad","#text-81,\n#text-82",".konsolifin-vaakamainos","#partners-container-big","#ticker",".ads-desktop,\n.ads-mobile","div.centered.motot-well-inverse.well[style^=\"padding-\"]","#ads-sidebar-top,\n#featured > figure[class] > a[href],\n#left-float > figure[class].wp-block-image > a[href][target][rel] > img[class][src],\n.ad.content-center,\n.content-center.header-nav-ad,\n.premium_container,\n.related-posts + figure[class].wp-block-image > a[href][target][rel] > img[class][src],\n.sidebar-element > .wp-block-image,\n.social-post + div + figure[class].wp-block-image > a[href][target][rel] > img[class][src],\n.wp-block-image > figure[class] > a[href],\nsection.post-single > figure[class].wp-block-image > a[href][target][rel] > img[class][src]",".cb-banneri-uusi","[href=\"http://www.vertaa.fi/lentoliput/\"]",".all-adds","#PowerRectangle,\n#PowerSkyscraper,\n[href^=\"https://tc.tradetracker%2Enet/\"],\na[rel^=\"sponsored\"]","footer > .container.tdt-ad-wrap","#p0,\ndiv#main-content > div:first-of-type[style=\"overflow:visible\"],\nul#picture_legend + div[style=\"overflow:visible\"]",".piwikTrackContent a[href]:not([href=\"mailto:support@tokentube.net\"], [href^=\"https://buy.stripe.com\"]),\na[data-content-piece$=\"_files_right_top\"],\na[data-content-piece=\"view_files_payer_bottom1\"]","#fb-root + div > div[style=\"background-color: #fff; margin: 0 auto; padding: 20px; display: table; min-width: 300px; max-width: 100%; font-family: 'Open Sans', sans-serif; font-size: 14px;\"],\n.ad300x300","#div-ff2-top","a[href*=\"mst-yhtiot\"]","#custom_html-63,\n#text-32,\n[href=\"https://pt-media.org/pikakasinot/\"],\n[href^=\"https://kasinopartio.com/\"]","#mw-data-after-content > div,\na#top ~ #siteNotice.mw-body-content"];

const hostnamesMap = new Map([["*",0],["alandstidningen.ax",1],["nyan.ax",2],["sjofart.ax",3],["adressit.com",4],["keskustelu.afterdawn.com",5],["aijaa.com",6],["aland.com",7],["alypaa.com",[8,9]],["pelikone.fi",[9,265,266]],["ampparit.com",[10,11,12]],["golfpiste.com",[11,29]],["muropaketti.com",[11,60]],["nettiauto.com",[11,62]],["nettikaravaani.com",11],["nettikone.com",11],["nettimarkkina.com",11],["nettimokki.com",11],["nettimoto.com",11],["nettivaraosa.com",11],["nettivene.com",11],["nettivuokraus.com",11],["alibi.fi",[11,101,102]],["anna.fi",[11,104]],["eralehti.fi",11],["hymy.fi",[11,102,176]],["kaksplus.fi",[11,87,104,193]],["kipparilehti.fi",11],["kotiliesi.fi",[11,211,212]],["koululainen.fi",11],["rakennusmaailma.fi",[11,242,276]],["seura.fi",11],["suomenkuvalehti.fi",[11,212,297]],["tekniikanmaailma.fi",[11,240,242,276,313]],["venelehti.fi",[11,350]],["luukku.com",[12,56]],["iijokiseutu.fi",[12,178]],["kaleva.fi",[12,178,195,196]],["kirkkojakaupunki.fi",12],["koillissanomat.fi",[12,178]],["kuntalehti.fi",12],["lapinkansa.fi",[12,178,196,219]],["mtvuutiset.fi",[12,59,249]],["pohjoisenpolut.fi",[12,178]],["pyhajokiseutu.fi",[12,178]],["raahenseutu.fi",[12,178]],["rantalakeus.fi",[12,178]],["seiska.fi",[12,288]],["siikajokilaakso.fi",[12,178]],["styleroom.fi",12],["keskustelu.suomi24.fi",[12,301]],["viinilehti.fi",12],["arcticinsider.com",13],["arvokisat.com",[14,15]],["herkkusuut.com",[14,15]],["huuhkajat.com",14],["laliiga.com",[14,15,48]],["leijonat.com",[14,15,48,51,52]],["nainen.com",[14,15,61]],["nhlsuomi.com",[14,15]],["suomif1.com",[14,15,48,81,82]],["suomifutis.com",[14,15,81,82]],["suomikiekko.com",[14,15,51,81,82]],["suomikoris.com",[14,15,81]],["suomiurheilu.com",[14,15,52,81]],["susijengi.com",[14,15]],["tinderinparhaat.com",[14,84]],["valioliiga.com",[14,15,82]],["viikonloppu.com",[14,15,47,89]],["metropoli.net",[14,378]],["sketsi.net",[14,15,385]],["eurheilu.org",[14,15]],["askelterveyteen.com",16],["myanimals.com",16],["aitiydenihme.fi",16],["mielenihmeet.fi",16],["autotalli.com",17],["brbikers.com",18],["elmotv.com",19],["etuovi.com",20],["mikrobitti.fi",[20,108,243]],["rantapallo.fi",[20,278]],["talouselama.fi",[20,108,306]],["facebook.com",21],["feissarimokat.com",22],["fillaritori.com",23],["findance.com",24],["foorumimme.com",25],["juttelu.com",25],["munfoorumi.com",25],["foorumi.eu",25],["keskustelu.info",25],["munpalsta.net",25],["futisfani.com",[26,27,28]],["kiekkofani.com",[27,28,39,40]],["penkkiurheilu.com",[27,28,40]],["uutisankka.com",[27,28,87,88]],["kiinteistoposti.fi",[27,205]],["projektiuutiset.fi",[27,272]],["halloota.com",30],["hardelli.com",31],["huoltovalikko.com",32],["ilmastointilaitteet.com",33],["jaakiekonmmkisat.com",34],["jalkapallonmmkisat.com",34],["ruuhkavuodet.fi",34],["jatkoaika.com",35],["kalamies.com",[36,37]],["edgeski.fi",[36,133,134]],["foregolf.fi",[36,134]],["rodeosnow.fi",[36,134]],["kalastus.com",38],["kodinkoneopas.com",41],["koeajolle.com",[42,43]],["inssinosingot.fi",[42,183]],["koneporssi.com",44],["konekuriiri.fi",44],["kukasoitti.com",45],["kuvaton.com",[46,47]],["kuvake.net",[46,377]],["leffatykki.com",[49,50]],["lumipallo.fi",50],["listafriikki.com",53],["tanssiin.fi",[53,145,309]],["outlook.live.com",54],["lottoarvonta.com",55],["maastohiihto.com",[57,58]],["jaatama.fi",57],["retkilehti.fi",[57,281,282]],["riistalehti.fi",[57,282,284]],["msn.com",59],["mtv.fi",59],["suomiareena.fi",59],["m.nettiauto.com",63],["m.nettikaravaani.com",63],["m.nettikone.com",63],["m.nettimarkkina.com",[63,65]],["m.nettimokki.com",[63,65]],["m.nettimoto.com",63],["m.nettivaraosa.com",63],["m.nettivene.com",63],["m.nettivuokraus.com",63],["www.nettiauto.com",64],["www.nettikaravaani.com",64],["www.nettikone.com",64],["www.nettimarkkina.com",[64,66]],["www.nettimokki.com",[64,67]],["www.nettimoto.com",[64,68]],["www.nettivaraosa.com",64],["www.nettivene.com",64],["www.nettivuokraus.com",64],["nopeustesti.com",69],["pakkotoisto.com",70],["keskustelu.pakkotoisto.com",71],["palkkavertailu.com",72],["pelaajat.com",[73,74]],["como.fi",[73,122,123,124,125,126,127]],["episodi.fi",[73,123,124,125,126,139,140]],["fum.fi",[73,91,123,124]],["inferno.fi",[73,123,124,125,140]],["rumba.fi",[73,123,124,125,126,127,140]],["soundi.fi",[73,123,124,126,127,140]],["tilt.fi",[73,91,124,125,126,127,140,326]],["pienimatkaopas.com",75],["rahakirstu.com",76],["sammysatv.com",[77,78]],["karjalainen.fi",[77,201]],["ap-cdn.sanomagames.com",79],["sportti.com",80],["terveydenasialla.com",83],["tvmatsit.com",[85,86]],["ehandel.fi",[85,136]],["hardware.fi",[87,160]],["metsalehti.fi",[87,239]],["viisitahtea.com",90],["vuokraovi.com",[91,92]],["finnkino.fi",[91,151]],["aamulehti.fi",[93,94]],["hs.fi",[93,94,175]],["is.fi",[93,186]],["jamsanseutu.fi",[93,94]],["janakkalansanomat.fi",[93,94]],["kankaanpaanseutu.fi",[93,94]],["kmvlehti.fi",[93,94]],["merikarvialehti.fi",[93,94]],["nokianuutiset.fi",[93,94]],["rannikkoseutu.fi",[93,94]],["satakunnankansa.fi",[93,94]],["suurkeuruu.fi",[93,94]],["sydansatakunta.fi",[93,94]],["tyrvaansanomat.fi",[93,94]],["valkeakoskensanomat.fi",[93,94]],["aamuposti.fi",95],["esaimaa.fi",[95,141]],["ess.fi",[95,142]],["forssanlehti.fi",95],["hameensanomat.fi",95],["hankasalmensanomat.fi",95],["heinavedenlehti.fi",95],["helsinginuutiset.fi",95],["iisalmensanomat.fi",95],["ita-savo.fi",[95,141]],["itahame.fi",95],["joroistenlehti.fi",95],["joutsenolehti.fi",95],["juvanlehti.fi",95],["kaakonkulma.fi",95],["kangasniemenlehti.fi",95],["karkkilantienoo.fi",95],["keski-hame.fi",95],["keski-uusimaa.fi",95],["keskilaakso.fi",95],["koillis-savo.fi",95],["kouvolansanomat.fi",[95,141]],["ksml.fi",95],["kymensanomat.fi",[95,141,142]],["lansi-savo.fi",[95,141]],["lansi-uusimaa.fi",95],["lansisaimaa.fi",95],["lansivayla.fi",95],["lappeenrannanuutiset.fi",95],["laukaa-konnevesi.fi",95],["lopenlehti.fi",95],["loviisansanomat.fi",95],["luoteis-uusimaa.fi",95],["luumaenlehti.fi",95],["mantsalanuutiset.fi",95],["mattijaliisa.fi",95],["miilu.fi",95],["mikkelinkaupunkilehti.fi",95],["nurmijarvenuutiset.fi",95],["pieksamaenlehti.fi",95],["pielavesi-keitele.fi",95],["pitajalainen.fi",95],["pitajanuutiset.fi",95],["pyhtaanlehti.fi",95],["sampolehti.fi",95],["savonsanomat.fi",95],["seinajoensanomat.fi",95],["seutuneloset.fi",95],["sipoonsanomat.fi",95],["sisa-savolehti.fi",95],["sisasuomenlehti.fi",95],["sjl.fi",95],["soisalonseutu.fi",95],["tamperelainen.fi",95],["tollotin.fi",95],["turkulainen.fi",95],["uusilahti.fi",95],["uusimaa.fi",95],["uutis-jousi.fi",95],["uutisvuoksi.fi",[95,141]],["vantaansanomat.fi",[95,344]],["viikkosavo.fi",95],["viispiikkinen.fi",95],["viitasaarenseutu.fi",95],["warkaudenlehti.fi",95],["puruvesi.net",95],["aamuset.fi",96],["akaanseutu.fi",[97,98]],["lvs.fi",[97,98,229]],["orivedensanomat.fi",[97,229,261]],["pirkkalainen.fi",[97,229,268]],["shl.fi",[97,98,229]],["ylojarvenuutiset.fi",[98,229]],["aksa.fi",99],["alfatvuutiset.fi",100],["alueviesti.fi",103],["apteekkari.fi",105],["apu.fi",106],["eeva.fi",106],["lily.fi",[106,224]],["meillakotona.fi",[106,224,237,238]],["terve.fi",[106,224,238,317]],["arvopaperi.fi",[107,108]],["kauppalehti.fi",[108,202]],["mediuutiset.fi",[108,202,236]],["tekniikkatalous.fi",[108,314]],["tivi.fi",[108,327]],["uusisuomi.fi",[108,338]],["audiovideo.fi",109],["auto1.fi",[110,111,112]],["ilmainensanakirja.fi",[111,112,117]],["testeri.fi",[111,112]],["blogit.fi",[112,117]],["autobild.fi",113],["avainlehti.fi",114],["avecmedia.fi",115],["bittiraha.fi",116],["bomber.fi",118],["boy.fi",119],["caravan-lehti.fi",120],["cdon.fi",121],["dailyfinland.fi",128],["demokraatti.fi",129],["digi-kuva.fi",130],["download.fi",131],["duunitori.fi",132],["edukas.fi",135],["enontekionsanomat.fi",[137,138]],["haapavesi-lehti.fi",137],["inarilainen.fi",[137,138]],["kainuunsanomat.fi",[137,138]],["kalajokilaakso.fi",137],["kalajokiseutu.fi",137],["keskipohjanmaa.fi",137],["kittilalehti.fi",[137,138]],["kotikulmilta.fi",137],["kotilappi.fi",[137,138]],["kuhmolainen.fi",[137,138]],["kuusamonseutu.fi",137],["lestijoki.fi",137],["luoteis-lappi.fi",[137,138]],["meantornionlaakso.fi",137],["nivala-lehti.fi",137],["perhonjokilaakso.fi",137],["pietarsaarensanomat.fi",137],["saariselansanomat.fi",[137,138]],["selanne-lehti.fi",137],["sompio.fi",[137,138]],["sotkamolehti.fi",[137,138]],["ylakainuu.fi",[137,138]],["etn.fi",143],["f1-forum.fi",144],["feedi.fi",145],["fiksukuluttaja.fi",[146,147]],["lehtikeidas.fi",[147,223]],["fillarifoorumi.fi",148],["finder.fi",149],["findit.fi",150],["flashscore.fi",152],["fonecta.fi",153],["fontanka.fi",154],["foreca.fi",155],["fuengirola.fi",[156,157]],["kaaoszine.fi",[157,191]],["paakallo.fi",[157,208]],["puheenaiheet.fi",[157,273]],["mesta.net",157],["gamereactor.fi",158],["gogolf.fi",159],["hattulaan.fi",161],["reska.fi",161],["hauskimmat.fi",162],["hbl.fi",163],["ostnyland.fi",163],["vastranyland.fi",[163,347]],["heili.fi",[164,165]],["outokummunseutu.fi",165],["pielisjokiseutu.fi",165],["pogostansanomat.fi",165],["prsanomat.fi",165],["ylakarjala.fi",165],["helsinkitimes.fi",166],["hevosurheilu.fi",167],["hidastaelamaa.fi",168],["hifimaailma.fi",169],["high.fi",170],["hinta.fi",171],["hintaopas.fi",172],["hintaseuranta.fi",173],["historianet.fi",174],["tieku.fi",174],["hyvaterveys.fi",177],["ilkkapohjalainen.fi",179],["iltalehti.fi",180],["iltapulu.fi",181],["impe.fi",182],["bbs.io-tech.fi",184],["www.io-tech.fi",185],["iskelma.fi",187],["m.jaatama.fi",188],["juoksufoorumi.fi",189],["jvg.fi",190],["kaasujalka.fi",192],["keskustelu.kaksplus.fi",194],["kamera-lehti.fi",197],["kangasalansanomat.fi",198],["kansalainen.fi",199],["kansantahto.fi",200],["keskustelu.kauppalehti.fi",203],["kauppojen-aukioloajat.fi",204],["kilipailut.fi",206],["kinuskikissa.fi",207],["klangi.fi",208],["suomenautolehti.fi",[208,296]],["koneviesti.fi",[209,210]],["maaseuduntulevaisuus.fi",[210,231]],["kotimaatutuksi.fi",[213,214]],["lomamatkalle.fi",[214,226]],["kotimikro.fi",215],["kuljetusnet.fi",216],["kulutusluottovertailu.fi",217],["kuntatekniikka.fi",218],["lapuansanomat.fi",220],["lauttakyla.fi",221],["lbaanijakuva.fi",222],["livetaajuus.fi",225],["lounaspori.fi",227],["ls24.fi",228],["maalampofoorumi.fi",230],["maaseutumedia.fi",232],["markkinointiuutiset.fi",233],["matkapuhelinfoorumi.fi",234],["mediaviikko.fi",235],["metsastysjakalastus.fi",[240,241,242]],["misssuomi.fi",244],["mobiili.fi",245],["monster.fi",246],["moottori.fi",247],["motouutiset.fi",248],["app.mtvuutiset.fi",250],["mutsimedia.fi",251],["myheritage.fi",252],["napsu.fi",253],["navigatormagazine.fi",[254,255]],["promaintlehti.fi",255],["netti-tv.fi",[256,257]],["synonyymit.fi",257],["nettitrendi.fi",258],["olutposti.fi",259],["omalahio.fi",260],["osterbottenstidning.fi",262],["sydin.fi",262],["vasabladet.fi",[262,345]],["palloliitto.fi",263],["pelaaja.fi",264],["suomela.fi",[266,294]],["teknavi.fi",[266,312]],["pelit.fi",267],["pkank.fi",269],["pointti.fi",270],["pottupellossa.fi",271],["radionova.fi",274],["radiovoima.fi",275],["rakentaja.fi",277],["ratkojat.fi",279],["redfoxsanakirja.fi",280],["riimihaku.fi",283],["ristinvoitto.fi",285],["ruutu.fi",286],["satakunnanviikko.fi",287],["seurakuntalainen.fi",289],["seutumajakka.fi",290],["sijoittaja.fi",291],["sijoitustieto.fi",292],["somerolehti.fi",293],["suomen118.fi",295],["suomenmaa.fi",298],["suomi24.fi",299],["chat.suomi24.fi",300],["www.suomi24.fi",302],["suomimobiili.fi",303],["superlehti.fi",304],["svl.fi",305],["taloustaito.fi",307],["talviopas.fi",308],["turisti-info.fi",308],["teatteritanssi.fi",310],["tehylehti.fi",311],["tennis.fi",315],["tervareitti.fi",316],["terveyskauneus.fi",318],["ticketmaster.fi",319],["tiedonantaja.fi",320],["tiendeo.fi",321],["tiketti.fi",322],["tilannehuone.fi",[323,324]],["irc-galleria.net",[323,372]],["tilisanomat.fi",325],["tori.fi",328],["autot.tori.fi",329],["m.tori.fi",330],["traktorpool.fi",331],["ts.fi",332],["tulikulma.fi",333],["turuntienoo.fi",334],["ulvilanseutu.fi",335],["urjalansanomat.fi",336],["uudenkaupunginsanomat.fi",337],["puheenvuoro.uusisuomi.fi",339],["vapaavuoro.uusisuomi.fi",[339,340]],["uusiteknologia.fi",341],["v2.fi",342],["vagarena.fi",343],["sevendays.vasabladet.fi",346],["vau.fi",348],["vauva.fi",349],["verkkouutiset.fi",351],["vertaa.fi",352],["viikkopk.fi",353],["viisasraha.fi",354],["viranomaisuutiset.fi",355],["voice.fi",356],["voima.fi",357],["wizhdsports.fi",358],["x2.fi",359],["xracing.fi",360],["yhteishyva.fi",361],["ykkoslohja.fi",362],["ylasatakunta.fi",363],["yrittajat.fi",364],["fel.gg",365],["murha.info",366],["2pos.life",367],["aasiakas.net",368],["deitti.net",369],["gekkonen.net",370],["huuto.net",371],["kilokalori.net",373],["kokemakelainen.net",374],["konsolifin.net",375],["kotikokki.net",376],["motot.net",379],["mvlehti.net",380],["esports.pallomeri.net",381],["polttoaine.net",382],["puskaradio.net",383],["riemurasia.net",384],["vapaasana.swedishforum.net",386],["tokentube.net",387],["vuodatus.net",388],["futisforum2.org",389],["moottoripyora.org",390],["pt-media.org",391],["taisto.org",392]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["nettimokki.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
