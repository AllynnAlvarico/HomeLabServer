package zpulse.homelab.powerusagemonitoring.controller;

import zpulse.homelab.powerusagemonitoring.service.TapoSmartPlugService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TapoController {

    private final TapoSmartPlugService tapoService;

    public TapoController(TapoSmartPlugService tapoService) {
        this.tapoService = tapoService;
    }

    @GetMapping("/power/{deviceId}")
    public String powerUsage(@PathVariable String deviceId) {
        return tapoService.getPowerUsage(deviceId);
    }

    @PostMapping("/power/{deviceId}")
    public String setPower(@PathVariable String deviceId, @RequestParam boolean on) {
        return tapoService.togglePower(deviceId, on);
    }
}
