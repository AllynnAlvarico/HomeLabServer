package zpulse.homelab.sysgauge.service;

import com.sun.management.OperatingSystemMXBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.lang.management.ManagementFactory;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Map;

public class SystemReadMetrics {
    private static final Logger LOG = LoggerFactory.getLogger(SystemReadMetrics.class);
    private final OperatingSystemMXBean os;

    public SystemReadMetrics(){
        os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
    }

    public Map<String, Object> getSystemMetrics(){
        long totalMem = os.getTotalMemorySize() / (1024 * 1024);
        long freeMem = os.getFreeMemorySize() / (1024 * 1024);
        long usedMem = totalMem - freeMem;

        return Map.of(
                "cpuLoadPercent", String.format("%.2f", getCpuLoad()),
                "totalMemoryMb", totalMem,
                "usedMemoryMb", usedMem,
                "cpuCores", Runtime.getRuntime().availableProcessors(),
                "currentCpuFrequencyGhz", String.format("%.3f", readCurrentCpuFrequencyGHz()),
                "maxCpuFrequencyGhz", String.format("%.3f", readMaxCpuFrequencyGHz()),
                "cpuTemperatureC", readCpuTemperature(),
                "uptimeMs", ManagementFactory.getRuntimeMXBean().getUptime(),
                "hostname", getHostname()
        );
    }

    private double getCpuLoad(){
        if (os.getCpuLoad() < 0) return 0.0;
        return os.getCpuLoad() * 100;
    }

    private int readCpuTemperature() {
        try (BufferedReader reader = new BufferedReader(new FileReader("/sys/class/thermal/thermal_zone0/temp"))) {
            String line = reader.readLine();
            if (line != null) {
                return Integer.parseInt(line.trim()) / 1000;
            }
        } catch (Exception e) {
//            LOG.info("Error read cpu thermal");
        }
        return -999;
    }

    private double readCurrentCpuFrequencyGHz() {
        String curFreqPath = "/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq";
        try (BufferedReader reader = new BufferedReader(new FileReader(curFreqPath))) {
            String line = reader.readLine();
            if (line != null) {
                return Double.parseDouble(line.trim()) / 1_000_000.0;
            }
        } catch (Exception e) {
//            LOG.info("Error read CPU Frequency");
        }
        return -1.0;
    }

    private double readMaxCpuFrequencyGHz() {
        String maxFreqPath = "/sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_max_freq";
        try (BufferedReader reader = new BufferedReader(new FileReader(maxFreqPath))) {
            String line = reader.readLine();
            if (line != null) {
                return Double.parseDouble(line.trim()) / 1_000_000.0;
            }
        } catch (Exception e) {
//            LOG.info("Error read current CPU Frequency");
        }
        return -1.0;
    }

    private String getHostname(){
        try {
            InetAddress addr = InetAddress.getLocalHost();
            return addr.getHostName();
        } catch (UnknownHostException e) {
//            LOG.info("Error getting hostname");
        }
        return "unknown";
    }
}
