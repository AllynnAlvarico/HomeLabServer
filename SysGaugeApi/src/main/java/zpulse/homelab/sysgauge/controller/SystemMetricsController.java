package zpulse.homelab.sysgauge.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.ManagementFactory;
import com.sun.management.OperatingSystemMXBean;
import java.util.Map;
import java.util.Random;

@RestController
public class SystemMetricsController {
    private final Random rnd = new Random();

    @GetMapping("/api/metrics")
    public Map<String, Object> metrics() {
        OperatingSystemMXBean os =
                (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();

        double cpuLoad = os.getSystemCpuLoad(); // 0..1
        long totalMem = os.getTotalMemorySize() / (1024 * 1024);
        long freeMem  = os.getFreeMemorySize()  / (1024 * 1024);
        long usedMem  = totalMem - freeMem;

        int cpuTempC = 45 + rnd.nextInt(11); // placeholder; can wire real temp later

        return Map.of(
                "cpuLoad", String.format("%.2f", cpuLoad),
                "totalMemoryMb", totalMem,
                "usedMemoryMb", usedMem,
                "cpuTemperatureC", cpuTempC
        );
    }
}