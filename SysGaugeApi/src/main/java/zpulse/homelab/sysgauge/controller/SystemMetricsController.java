package zpulse.homelab.sysgauge.controller;
import zpulse.homelab.sysgauge.service.SystemReadMetrics;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SystemMetricsController {

    @GetMapping("/sys/api/metrics")
    public Map<String, Object> metrics() {
        SystemReadMetrics srm = new SystemReadMetrics();
        return srm.getSystemMetrics();
    }


}
