package zpulse.homelab.sysgauge.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.FileReader;
import java.lang.management.ManagementFactory;
import com.sun.management.OperatingSystemMXBean;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Map;

@RestController
public class SystemMetricsController {

    @GetMapping("/sys/api/metrics")
    public Map<String, Object> metrics() {
        var os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();

        double cpuLoad = os.getCpuLoad();
        if (cpuLoad < 0) cpuLoad = 0.0;
        cpuLoad = cpuLoad * 100;

        long totalMem = os.getTotalMemorySize() / (1024 * 1024);
        long freeMem = os.getFreeMemorySize() / (1024 * 1024);
        long usedMem = totalMem - freeMem;

        int cpuTempC = readCpuTemperature();

        long uptime = ManagementFactory.getRuntimeMXBean().getUptime();
        String hostname = "unknown";
        try {
            InetAddress addr = InetAddress.getLocalHost();
            hostname = addr.getHostName();
        } catch (UnknownHostException e) {

        }

        return Map.of(
                "cpuLoadPercent", String.format("%.2f", cpuLoad),
                "totalMemoryMb", totalMem,
                "usedMemoryMb", usedMem,
                "cpuTemperatureC", cpuTempC,
                "uptimeMs", uptime,
                "hostname", hostname
        );
    }

    private int readCpuTemperature() {
        try (BufferedReader reader = new BufferedReader(new FileReader("/sys/class/thermal/thermal_zone0/temp"))) {
            String line = reader.readLine();
            if (line != null) {
                return Integer.parseInt(line.trim()) / 1000;
            }
        } catch (Exception e) {

        }
        return -999;
    }
}
