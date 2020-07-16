(function() {var implementors = {};
implementors["gbm"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">DrmControlDevice</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"struct\" href=\"gbm/struct.Device.html\" title=\"struct gbm::Device\">Device</a>&lt;T&gt;","synthetic":false,"types":["gbm::device::Device"]}];
implementors["smithay"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"struct\" href=\"smithay/backend/drm/atomic/struct.AtomicDrmSurface.html\" title=\"struct smithay::backend::drm::atomic::AtomicDrmSurface\">AtomicDrmSurface</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::atomic::surface::AtomicDrmSurface"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"struct\" href=\"smithay/backend/drm/atomic/struct.AtomicDrmDevice.html\" title=\"struct smithay::backend::drm::atomic::AtomicDrmDevice\">AtomicDrmDevice</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::atomic::AtomicDrmDevice"]},{"text":"impl&lt;D1:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a> + <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">ControlDevice</a>, D2:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a> + <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">ControlDevice</a>&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"enum\" href=\"smithay/backend/drm/common/fallback/enum.FallbackDevice.html\" title=\"enum smithay::backend::drm::common::fallback::FallbackDevice\">FallbackDevice</a>&lt;D1, D2&gt;","synthetic":false,"types":["smithay::backend::drm::common::fallback::FallbackDevice"]},{"text":"impl&lt;S1:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Surface.html\" title=\"trait smithay::backend::drm::Surface\">Surface</a> + <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">ControlDevice</a>, S2:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.Surface.html\" title=\"trait smithay::backend::drm::Surface\">Surface</a> + <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">ControlDevice</a>&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"enum\" href=\"smithay/backend/drm/common/fallback/enum.FallbackSurface.html\" title=\"enum smithay::backend::drm::common::fallback::FallbackSurface\">FallbackSurface</a>&lt;S1, S2&gt;","synthetic":false,"types":["smithay::backend::drm::common::fallback::FallbackSurface"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"struct\" href=\"smithay/backend/drm/legacy/struct.LegacyDrmSurface.html\" title=\"struct smithay::backend::drm::legacy::LegacyDrmSurface\">LegacyDrmSurface</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::legacy::surface::LegacyDrmSurface"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"drm/control/trait.Device.html\" title=\"trait drm::control::Device\">Device</a> for <a class=\"struct\" href=\"smithay/backend/drm/legacy/struct.LegacyDrmDevice.html\" title=\"struct smithay::backend::drm::legacy::LegacyDrmDevice\">LegacyDrmDevice</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::legacy::LegacyDrmDevice"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()