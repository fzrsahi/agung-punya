// src/js/simulationManager.js
import * as Cesium from 'cesium';
// Impor fungsi efek hujan dan state partikelnya jika perlu dicek di sini
import { addRainEffect, removeRainEffect, currentRainParticleSystem as rainSystemFromEffectModule } from './rainEffect.js';

// State internal modul ini untuk interval event hujan
let rainEventStartJulianDate = null;
let rainEventEndJulianDate = null;

// Variabel untuk animasi air (jika Anda mengaktifkannya kembali nanti)
// let isAnimatingWater = false;
// let waterAnimationStartTime = null;
// const WATER_ANIMATION_INITIAL_HEIGHT = 0.1;
// const WATER_ANIMATION_TARGET_HEIGHT = 30;
// const WATER_ANIMATION_RISE_RATE_SEC_PER_METER = 10.0;
// let waterAnimationTotalRise = 0;
// let waterAnimationDurationSeconds = 0;

export function initializeSimulationClockEvents(viewer) {
  viewer.clock.onTick.addEventListener(function(clock) {
    // Logika untuk efek hujan berdasarkan interval
    if (rainEventStartJulianDate && rainEventEndJulianDate) {
      const currentTime = clock.currentTime;
      const isCurrentlyInInterval = Cesium.JulianDate.greaterThanOrEquals(currentTime, rainEventStartJulianDate) &&
                                    Cesium.JulianDate.lessThan(currentTime, rainEventEndJulianDate);

      if (isCurrentlyInInterval) {
        if (!rainSystemFromEffectModule) { // Cek apakah sistem partikel dari modul rainEffect aktif
            addRainEffect(viewer.scene);
        }
      } else {
        if (rainSystemFromEffectModule) {
            removeRainEffect(viewer.scene);
        }
      }
    } else {
      if (rainSystemFromEffectModule) {
          removeRainEffect(viewer.scene);
      }
    }

    // Tempat untuk logika animasi air jika diaktifkan kembali
    // if (isAnimatingWater) { /* ... logika animasi air ... */ }
  });
}

export function defineRainEvent(viewer, durationHours) {
  removeRainEffect(viewer.scene); // Bersihkan efek lama dulu

  rainEventStartJulianDate = Cesium.JulianDate.clone(viewer.clock.currentTime);
  rainEventEndJulianDate = Cesium.JulianDate.addHours(rainEventStartJulianDate, durationHours, new Cesium.JulianDate());
  
  viewer.clock.shouldAnimate = true;
  console.log(`Event hujan terdefinisi dari: ${Cesium.JulianDate.toDate(rainEventStartJulianDate).toLocaleString()} hingga ${Cesium.JulianDate.toDate(rainEventEndJulianDate).toLocaleString()}`);
}

export function cancelRainEvent(viewer) {
  removeRainEffect(viewer.scene);
  rainEventStartJulianDate = null;
  rainEventEndJulianDate = null;
  console.log("Event hujan dibatalkan.");
}

// Fungsi untuk animasi air (bisa diaktifkan kembali nanti)
/*
import { waterLevelEntities } from './dataLoader.js'; // Perlu impor jika mengelola entitas air di sini

export function startWaterRiseAnimation(viewer) {
    resetWaterLevelToInitial(); // Fungsi ini perlu didefinisikan/diimpor
    
    waterAnimationTotalRise = WATER_ANIMATION_TARGET_HEIGHT - WATER_ANIMATION_INITIAL_HEIGHT;
    waterAnimationDurationSeconds = waterAnimationTotalRise * WATER_ANIMATION_RISE_RATE_SEC_PER_METER;
    
    waterAnimationStartTime = Cesium.JulianDate.clone(viewer.clock.currentTime);
    isAnimatingWater = true;
    viewer.clock.shouldAnimate = true;
    console.log(`Memulai animasi kenaikan air. Target: ${WATER_ANIMATION_TARGET_HEIGHT}m, Durasi: ${waterAnimationDurationSeconds.toFixed(2)}s`);
}

export function cancelWaterRiseAnimation() {
    isAnimatingWater = false;
    waterAnimationStartTime = null;
    resetWaterLevelToInitial(); // Fungsi ini perlu didefinisikan/diimpor
    console.log("Animasi air dibatalkan dan direset.");
}

// Fungsi reset ini mungkin lebih baik di dataLoader atau uiControls,
// tapi jika simulasiManager mengontrol state animasi air, bisa juga di sini.
const startHeightForReset = 29; // Atau WATER_ANIMATION_INITIAL_HEIGHT

function resetWaterLevelToInitial() {
    waterLevelEntities.forEach((entity) => {
        if (Cesium.defined(entity.polygon)) {
            entity.polygon.extrudedHeight = startHeightForReset; 
            entity.polygon.material = Cesium.Color.fromCssColorString("#00BFFF").withAlpha(0.7);
        }
    });
}
*/