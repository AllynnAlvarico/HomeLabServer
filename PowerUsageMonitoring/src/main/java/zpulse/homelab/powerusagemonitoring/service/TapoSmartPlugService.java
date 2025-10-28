package zpulse.homelab.powerusagemonitoring.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TapoSmartPlugService {

    private final RestTemplate restTemplate;

    public TapoSmartPlugService() {
        this.restTemplate = new RestTemplate();
    }

    private final String BASE_URL = "http://192.168.178.151";  // Change to your running tapo-smartplug URL

    public String getPowerUsage(String deviceId) {
        String url = BASE_URL + "/api/v1/device/" + deviceId + "/power_usage";
        return restTemplate.getForObject(url, String.class);
    }

    public String togglePower(String deviceId, boolean on) {
        String url = BASE_URL + "/api/v1/device/" + deviceId + "/power";
        String state = on ? "on" : "off";
        return restTemplate.postForObject(url + "?state=" + state, null, String.class);
    }


}
