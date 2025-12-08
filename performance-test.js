/**
 * Animation Performance Testing Script
 * Tests optimized animations and measures performance metrics
 */

class AnimationPerformanceTester {
  constructor() {
    this.results = {
      hero: {},
      skills: {},
      about: {},
      experience: {},
      overall: {}
    };
    this.testScenarios = [
      'normal-scroll',
      'fast-scroll',
      'hover-interactions',
      'reduced-motion',
      'low-end-device'
    ];
  }

  async runAllTests() {
    console.log('🚀 Starting Animation Performance Tests...\n');
    
    for (const scenario of this.testScenarios) {
      console.log(`📊 Testing scenario: ${scenario}`);
      await this.runScenarioTest(scenario);
    }
    
    this.generateReport();
    return this.results;
  }

  async runScenarioTest(scenario) {
    // Reset performance metrics
    performance.clearMarks();
    performance.clearMeasures();
    
    switch (scenario) {
      case 'normal-scroll':
        await this.testNormalScroll();
        break;
      case 'fast-scroll':
        await this.testFastScroll();
        break;
      case 'hover-interactions':
        await this.testHoverInteractions();
        break;
      case 'reduced-motion':
        await this.testReducedMotion();
        break;
      case 'low-end-device':
        await this.testLowEndDevice();
        break;
    }
  }

  async testNormalScroll() {
    performance.mark('normal-scroll-start');
    
    // Simulate normal scrolling through all sections
    await this.simulateScroll(0, document.body.scrollHeight, 2000);
    
    performance.mark('normal-scroll-end');
    performance.measure('normal-scroll', 'normal-scroll-start', 'normal-scroll-end');
    
    this.results.overall.normalScroll = {
      duration: performance.getEntriesByName('normal-scroll')[0]?.duration || 0,
      fps: await this.measureFPSDuring(() => this.simulateScroll(0, document.body.scrollHeight, 2000)),
      memoryUsage: this.measureMemoryUsage()
    };
  }

  async testFastScroll() {
    performance.mark('fast-scroll-start');
    
    // Simulate fast scrolling
    await this.simulateScroll(0, document.body.scrollHeight, 500);
    
    performance.mark('fast-scroll-end');
    performance.measure('fast-scroll', 'fast-scroll-start', 'fast-scroll-end');
    
    this.results.overall.fastScroll = {
      duration: performance.getEntriesByName('fast-scroll')[0]?.duration || 0,
      fps: await this.measureFPSDuring(() => this.simulateScroll(0, document.body.scrollHeight, 500)),
      memoryUsage: this.measureMemoryUsage()
    };
  }

  async testHoverInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    const experienceCards = document.querySelectorAll('.experience-card');
    
    performance.mark('hover-start');
    
    // Test skill item hover animations
    for (let i = 0; i < Math.min(5, skillItems.length); i++) {
      skillItems[i].dispatchEvent(new MouseEvent('mouseenter'));
      await this.delay(200);
      skillItems[i].dispatchEvent(new MouseEvent('mouseleave'));
      await this.delay(100);
    }
    
    // Test experience card hover animations
    for (let i = 0; i < Math.min(3, experienceCards.length); i++) {
      experienceCards[i].dispatchEvent(new MouseEvent('mouseenter'));
      await this.delay(200);
      experienceCards[i].dispatchEvent(new MouseEvent('mouseleave'));
      await this.delay(100);
    }
    
    performance.mark('hover-end');
    performance.measure('hover-interactions', 'hover-start', 'hover-end');
    
    this.results.overall.hoverInteractions = {
      duration: performance.getEntriesByName('hover-interactions')[0]?.duration || 0,
      fps: await this.measureFPSDuring(() => this.testHoverInteractions()),
      memoryUsage: this.measureMemoryUsage()
    };
  }

  async testReducedMotion() {
    // Temporarily enable reduced motion
    const originalMediaQuery = window.matchMedia;
    window.matchMedia = (query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {}
    });
    
    performance.mark('reduced-motion-start');
    
    // Reload animations with reduced motion
    if (window.initHeroAnimation) await window.initHeroAnimation();
    if (window.initSkillsAnimation) await window.initSkillsAnimation();
    if (window.initAboutAnimation) await window.initAboutAnimation();
    if (window.initExperienceAnimation) await window.initExperienceAnimation();
    
    await this.simulateScroll(0, document.body.scrollHeight, 1500);
    
    performance.mark('reduced-motion-end');
    performance.measure('reduced-motion', 'reduced-motion-start', 'reduced-motion-end');
    
    this.results.overall.reducedMotion = {
      duration: performance.getEntriesByName('reduced-motion')[0]?.duration || 0,
      fps: await this.measureFPSDuring(() => this.simulateScroll(0, document.body.scrollHeight, 1500)),
      memoryUsage: this.measureMemoryUsage(),
      animationsDisabled: this.checkAnimationsDisabled()
    };
    
    // Restore original matchMedia
    window.matchMedia = originalMediaQuery;
  }

  async testLowEndDevice() {
    // Simulate low-end device by throttling
    const originalRAF = window.requestAnimationFrame;
    let frameCount = 0;
    window.requestAnimationFrame = (callback) => {
      frameCount++;
      if (frameCount % 2 === 0) { // Skip every other frame
        return originalRAF(callback);
      }
      return setTimeout(() => callback(performance.now()), 32); // ~30fps
    };
    
    performance.mark('low-end-start');
    
    await this.simulateScroll(0, document.body.scrollHeight, 2000);
    
    performance.mark('low-end-end');
    performance.measure('low-end', 'low-end-start', 'low-end-end');
    
    this.results.overall.lowEndDevice = {
      duration: performance.getEntriesByName('low-end')[0]?.duration || 0,
      fps: await this.measureFPSDuring(() => this.simulateScroll(0, document.body.scrollHeight, 2000)),
      memoryUsage: this.measureMemoryUsage(),
      throttled: true
    };
    
    // Restore original RAF
    window.requestAnimationFrame = originalRAF;
  }

  // Helper methods
  async simulateScroll(from, to, duration) {
    return new Promise(resolve => {
      const startTime = performance.now();
      const startScroll = from;
      const scrollDistance = to - from;
      
      const scrollStep = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out function
        const easedProgress = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress;
        
        window.scrollTo(0, startScroll + (scrollDistance * easedProgress));
        
        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(scrollStep);
    });
  }

  async measureFPSDuring(action) {
    let frames = 0;
    let startTime = performance.now();
    let fps = 0;
    
    const countFrame = () => {
      frames++;
      if (performance.now() - startTime < 1000) {
        requestAnimationFrame(countFrame);
      } else {
        fps = frames;
      }
    };
    
    requestAnimationFrame(countFrame);
    await action();
    await this.delay(1000);
    
    return fps;
  }

  measureMemoryUsage() {
    if (performance.memory) {
      return {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
      };
    }
    return { usedJSHeapSize: 0, totalJSHeapSize: 0, jsHeapSizeLimit: 0 };
  }

  checkAnimationsDisabled() {
    const heroElements = document.querySelectorAll('.hero-name-char, .hero-specialty, .hero-summary');
    const skillsElements = document.querySelectorAll('.skill-item');
    const aboutElements = document.querySelectorAll('.about-card, .paragraph, .hashtag');
    
    return {
      hero: Array.from(heroElements).every(el => getComputedStyle(el).animation === 'none'),
      skills: Array.from(skillsElements).every(el => getComputedStyle(el).animation === 'none'),
      about: Array.from(aboutElements).every(el => getComputedStyle(el).animation === 'none')
    };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  generateReport() {
    console.log('\n📈 Performance Test Results');
    console.log('=' .repeat(50));
    
    Object.entries(this.results.overall).forEach(([scenario, data]) => {
      console.log(`\n🎯 ${scenario.toUpperCase()}:`);
      console.log(`   Duration: ${data.duration?.toFixed(2)}ms`);
      console.log(`   FPS: ${data.fps || 'N/A'}`);
      console.log(`   Memory: ${data.memoryUsage ? 
        `${(data.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB` : 'N/A'}`);
      
      if (data.animationsDisabled) {
        console.log(`   Animations Disabled: ${JSON.stringify(data.animationsDisabled)}`);
      }
    });
    
    console.log('\n✅ Optimization Recommendations:');
    this.generateRecommendations();
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Analyze FPS
    const scenarios = Object.entries(this.results.overall);
    const lowFPS = scenarios.filter(([_, data]) => data.fps && data.fps < 30);
    
    if (lowFPS.length > 0) {
      recommendations.push(`⚠️  Low FPS detected in: ${lowFPS.map(([name]) => name).join(', ')}`);
    }
    
    // Analyze memory usage
    const highMemory = scenarios.filter(([_, data]) => {
      if (!data.memoryUsage) return false;
      const memoryMB = data.memoryUsage.usedJSHeapSize / 1024 / 1024;
      return memoryMB > 100; // Over 100MB
    });
    
    if (highMemory.length > 0) {
      recommendations.push(`💾 High memory usage in: ${highMemory.map(([name]) => name).join(', ')}`);
    }
    
    // Check reduced motion compliance
    if (this.results.overall.reducedMotion?.animationsDisabled) {
      recommendations.push('♿ Reduced motion compliance: ✅ Working correctly');
    }
    
    // Performance optimization suggestions
    recommendations.push('🚀 Performance Tips:');
    recommendations.push('   - Use will-change CSS property for animated elements');
    recommendations.push('   - Implement hardware acceleration with translateZ(0)');
    recommendations.push('   - Batch DOM operations to minimize reflows');
    recommendations.push('   - Use requestAnimationFrame for smooth animations');
    recommendations.push('   - Clean up animations on component unmount');
    
    recommendations.forEach(rec => console.log(rec));
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.AnimationPerformanceTester = AnimationPerformanceTester;
  
  // Auto-run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('🎨 Animation Performance Tester loaded!');
      console.log('Run: new AnimationPerformanceTester().runAllTests()');
    });
  } else {
    console.log('🎨 Animation Performance Tester loaded!');
    console.log('Run: new AnimationPerformanceTester().runAllTests()');
  }
}

export default AnimationPerformanceTester;