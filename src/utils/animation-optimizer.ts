/**
 * Animation Performance Optimizer
 * Provides hardware-accelerated, memory-efficient animations
 */

interface AnimationConfig {
  duration: number;
  ease: string;
  stagger?: number;
  delay?: number;
}

interface OptimizedAnimationOptions {
  preferGPU?: boolean;
  reduceMotion?: boolean;
  frameRate?: number;
  cleanup?: boolean;
}

/**
 * Hardware-accelerated CSS transforms for better performance
 */
export const HARDWARE_ACCELERATION = {
  transform: 'translateZ(0)',
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden',
  perspective: '1000px',
} as const;

/**
 * Optimized easing functions for better performance
 */
export const OPTIMIZED_EASES = {
  // Use CSS-native eases when possible
  power2Out: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  backOut: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeOut: 'ease-out',
  linear: 'linear',
} as const;

/**
 * Performance-optimized animation configurations
 */
export const OPTIMIZED_CONFIGS = {
  // Fast, subtle animations for better perceived performance
  fast: { duration: 0.3, ease: 'power2.out' },
  medium: { duration: 0.5, ease: 'power2.out' },
  slow: { duration: 0.8, ease: 'power2.out' },
  
  // Hero animations - optimized for first paint
  heroText: { duration: 0.6, ease: 'back.out(1.2)' },
  heroButton: { duration: 0.4, ease: 'back.out(1.5)' },
  
  // Scroll-triggered animations
  scrollReveal: { duration: 0.5, ease: 'power2.out', stagger: 0.05 },
  scrollSlide: { duration: 0.6, ease: 'power2.out' },
} as const;

/**
 * Batch DOM operations for better performance
 */
export function batchDOMOperations(operations: () => void): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(operations);
  });
}

/**
 * Apply hardware acceleration to elements
 */
export function applyHardwareAcceleration(element: HTMLElement): void {
  Object.assign(element.style, HARDWARE_ACCELERATION);
}

/**
 * Remove hardware acceleration to free up GPU memory
 */
export function removeHardwareAcceleration(element: HTMLElement): void {
  element.style.willChange = 'auto';
  element.style.backfaceVisibility = 'visible';
  element.style.perspective = 'none';
}

/**
 * Optimized GSAP animation with automatic cleanup
 */
export function createOptimizedTimeline(options: OptimizedAnimationOptions = {}): any {
  // Dynamic import to reduce initial bundle size
  return import('gsap').then(({ default: gsap }) => {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'power2.out',
        duration: 0.5,
      },
      onComplete: options.cleanup ? () => {
        // Auto-cleanup for memory efficiency
        timeline.kill();
      } : undefined,
    });

    return timeline;
  });
}

/**
 * Optimized ScrollTrigger with performance settings
 */
export function createOptimizedScrollTrigger(element: HTMLElement, config: any): any {
  return import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
    return ScrollTrigger.create({
      ...config,
      // Performance optimizations
      scroller: window,
      anticipatePin: 1,
      fastScrollEnd: true,
      // Reduce memory usage
      onRefresh: () => ScrollTrigger.refresh(),
      onRefreshInit: () => {
        // Cleanup old animations before refresh
        ScrollTrigger.getAll().forEach(st => st.kill());
      },
    });
  });
}

/**
 * Throttled animation frame for better performance
 */
export function throttledRAF(callback: () => void, fps: number = 60): () => void {
  let rafId: number | null = null;
  let lastTime = 0;
  const interval = 1000 / fps;

  return function throttledCallback() {
    const now = performance.now();
    
    if (now - lastTime >= interval) {
      lastTime = now;
      callback();
    }
    
    rafId = requestAnimationFrame(throttledCallback);
  };
}

/**
 * Memory-efficient animation cleanup
 */
export class AnimationCleanup {
  private animations: Array<() => void> = [];
  private eventListeners: Array<{ element: Element; type: string; handler: EventListener }> = [];

  addAnimation(killFunction: () => void): void {
    this.animations.push(killFunction);
  }

  addEventListener(element: Element, type: string, handler: EventListener): void {
    element.addEventListener(type, handler);
    this.eventListeners.push({ element, type, handler });
  }

  cleanup(): void {
    // Kill all animations
    this.animations.forEach(kill => kill());
    this.animations = [];

    // Remove all event listeners
    this.eventListeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.eventListeners = [];

    // Force garbage collection hint
    if (window.gc) {
      window.gc();
    }
  }
}

/**
 * Optimized intersection observer for scroll animations
 */
export function createOptimizedIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  return new IntersectionObserver(callback, {
    rootMargin: '50px', // Pre-load animations
    threshold: 0.1, // Trigger at 10% visibility
    ...options,
  });
}

/**
 * Performance monitoring for animations
 */
export class AnimationPerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  private rafId: number | null = null;

  startMonitoring(name: string): void {
    const startTime = performance.now();
    let frameCount = 0;

    const monitor = () => {
      frameCount++;
      
      if (frameCount % 60 === 0) { // Check every 60 frames
        const elapsed = performance.now() - startTime;
        const fps = (frameCount / elapsed) * 1000;
        
        if (!this.metrics.has(name)) {
          this.metrics.set(name, []);
        }
        
        this.metrics.get(name)!.push(fps);
        
        // Keep only last 10 measurements
        const measurements = this.metrics.get(name)!;
        if (measurements.length > 10) {
          measurements.shift();
        }
      }

      this.rafId = requestAnimationFrame(monitor);
    };

    this.rafId = requestAnimationFrame(monitor);
  }

  stopMonitoring(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  getMetrics(name: string): number[] {
    return this.metrics.get(name) || [];
  }

  getAverageFPS(name: string): number {
    const metrics = this.metrics.get(name) || [];
    if (metrics.length === 0) return 0;
    return metrics.reduce((a, b) => a + b, 0) / metrics.length;
  }
}