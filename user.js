/*** Quietfox ***/
/**  Mandatory	  **/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // default is false

/** Scrolling **/
/** Chrome smooth scrolling
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 225);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);

/** MS EDGE
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0", 4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);

**/
/*
////  NATURAL SMOOTH SCROLLING                                                                     preset             info               [default]
user_pref("mousewheel.acceleration.factor", 5);                                            // NSS     5        ACCEL MAX SPEED 1-20           [10]
user_pref("mousewheel.acceleration.start", 4);                                             // NSS     4        accel after x ticks            [-1]
user_pref("mousewheel.default.delta_multiplier_x", 100);                                   // NSS   100           reset previous             [100]
user_pref("mousewheel.default.delta_multiplier_y", 100);                                   // NSS   100           reset previous             [100]
user_pref("mousewheel.default.delta_multiplier_z", 100);                                   // NSS   100           reset previous             [100]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false);             // NSS  false       ignoring sys accel           [true]
user_pref("mousewheel.transaction.timeout", 1500);                                         // NSS  1500           reset previous            [1500]
user_pref("mousewheel.min_line_scroll_amount", 0);                                         // NSS     0       lines vary with accel            [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance", 3);                                // NSS     3       keyboard matches mwheel          [5]
user_pref("toolkit.scrollbox.verticalScrollDistance", 3);                                  // NSS     3       keyboard matches mwheel          [3]
user_pref("layers.async-pan-zoom.enabled", true);                                          // NSS  true          smoothness boost           [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars", true);                           // NSS  true          keyboard fix I            [false]
user_pref("apz.paint_skipping.enabled", false);                                            // NSS  false         keyboard fix II v85        [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);                        // NSS  true       report wheel in pixels       [false]
user_pref("layout.css.scroll-behavior.spring-constant", "300.0");                          // NSS  "300"      css mimics gecko scroll        [250]
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);                        // NSS   100      lame pref wreks settings        [100]
user_pref("general.smoothScroll.msdPhysics.enabled", false);                               // NSS  false        no stutering fling         [false]
user_pref("general.smoothScroll.currentVelocityWeighting", "0.0");                         // NSS  "0.0"          reduce stutter            [0.25]
user_pref("general.smoothScroll.durationToIntervalRatio", 400);                            // NSS   400           reduce stutter             [200]
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.0");                        // NSS  "0.0"          reduce stutter             [0.4]
user_pref("general.smoothScroll.lines.durationMaxMS", 300);                                // NSS   300          arrows smoothing            [150]
user_pref("general.smoothScroll.lines.durationMinMS", 300);                                // NSS   300          arrows smoothing            [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 300);                           // NSS   300          mwheel smoothing            [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300);                           // NSS   300          mwheel smoothing             [50]
user_pref("general.smoothScroll.other.durationMaxMS", 150);                                // NSS   150          home-end smoothing          [150]
user_pref("general.smoothScroll.other.durationMinMS", 150);                                // NSS   150          home-end smoothing          [150]
user_pref("general.smoothScroll.pages.durationMaxMS", 200);                                // NSS   200         pgup-pgdn smoothing          [150]
user_pref("general.smoothScroll.pages.durationMinMS", 200);                                // NSS   200         pgup-pgdn smoothing          [150]
user_pref("general.smoothScroll.pixels.durationMaxMS", 300);                               // NSS   300           pixel smoothing            [150]
user_pref("general.smoothScroll.pixels.durationMinMS", 300);                               // NSS   300           pixel smoothing            [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 500);                           // NSS   500         scrollbar smoothing          [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS", 500);                           // NSS   500         scrollbar smoothing          [150]
*/
/** Old scrolling **/
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 400); 
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 200); 
user_pref("mousewheel.acceleration.factor", 10); 
user_pref("mousewheel.acceleration.start", -1);