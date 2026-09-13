"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Plane, Compass, Sparkles, Navigation, CheckCircle, ExternalLink } from "lucide-react";

export interface Destination {
  id: string;
  country: string;
  code: string;
  city: string;
  flag: string;
  lat: number;
  lng: number;
  highlight: string;
  visaType: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "uk",
    country: "United Kingdom",
    code: "UK",
    city: "London",
    flag: "🇬🇧",
    lat: 51.5074,
    lng: -0.1278,
    highlight: "Russell Group & 2-Yr Post Study Work",
    visaType: "Tier 4 Student Visa",
  },
  {
    id: "au",
    country: "Australia",
    code: "AU",
    city: "Sydney",
    flag: "🇦🇺",
    lat: -33.8688,
    lng: 151.2093,
    highlight: "Group of Eight & Stay-back Pathways",
    visaType: "Subclass 500 Student Visa",
  },
  {
    id: "ca",
    country: "Canada",
    code: "CA",
    city: "Toronto",
    flag: "🇨🇦",
    lat: 43.6532,
    lng: -79.3832,
    highlight: "Top Universities & up to 3-Yr PGWP",
    visaType: "Study Permit & PGWP",
  },
  {
    id: "us",
    country: "United States",
    code: "US",
    city: "New York",
    flag: "🇺🇸",
    lat: 40.7128,
    lng: -74.0060,
    highlight: "Tier 1 Research & 3-Yr STEM OPT",
    visaType: "F-1 Student Visa",
  },
  {
    id: "de",
    country: "Germany",
    code: "DE",
    city: "Berlin",
    flag: "🇩🇪",
    lat: 52.5200,
    lng: 13.4050,
    highlight: "Tuition-Free Study & 18-Mo Job Seeker",
    visaType: "National Visa (D-Visa)",
  },
  {
    id: "ae",
    country: "United Arab Emirates",
    code: "UAE",
    city: "Dubai",
    flag: "🇦🇪",
    lat: 25.2048,
    lng: 55.2708,
    highlight: "Global Hub & Fast Track Processing",
    visaType: "Visit & Residence Visa",
  },
  {
    id: "jp",
    country: "Japan",
    code: "JP",
    city: "Tokyo",
    flag: "🇯🇵",
    lat: 35.6762,
    lng: 139.6503,
    highlight: "Tech Innovation & English Programs",
    visaType: "College Student Visa",
  },
  {
    id: "fr",
    country: "France",
    code: "FR",
    city: "Paris",
    flag: "🇫🇷",
    lat: 48.8566,
    lng: 2.3522,
    highlight: "Grandes Écoles & Schengen Mobility",
    visaType: "VLS-TS Long Stay Visa",
  },
  {
    id: "ie",
    country: "Ireland",
    code: "IE",
    city: "Dublin",
    flag: "🇮🇪",
    lat: 53.3498,
    lng: -6.2603,
    highlight: "European Silicon Valley & 2-Yr Stay",
    visaType: "Stamp 2 Student Visa",
  },
];

interface FlightRoute {
  id: string;
  from: Destination;
  to: Destination;
  speed: number;
  progress: number;
  altitude: number;
}

interface ActivePopup {
  destination: Destination;
  type: "departure" | "arrival" | "manual";
  flightId?: string;
  screenX: number;
  screenY: number;
  visible: boolean;
  statusText: string;
  statusEmoji: string;
}

interface PlaneTag {
  flightId: string;
  routeText: string;
  screenX: number;
  screenY: number;
  visible: boolean;
}

interface GlobeProps {
  onSelectDestination?: (country: string) => void;
  className?: string;
  isBackground?: boolean;
}

export const Globe: React.FC<GlobeProps> = ({
  onSelectDestination,
  className = "",
  isBackground = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePopups, setActivePopups] = useState<Record<string, ActivePopup>>({});
  const [planeTags, setPlaneTags] = useState<Record<string, PlaneTag>>({});
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Target rotation for smooth animated navigation
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const globeRotationRef = useRef({ x: 0.28, y: 0.0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0.0028 });

  // Convert lat/lng to 3D Cartesian coordinates on sphere radius R
  const latLngToVector = useCallback((lat: number, lng: number, radius: number): THREE.Vector3 => {
    const phi = (lat * Math.PI) / 180;
    const theta = ((lng + 180) * Math.PI) / 180;
    const rXZ = radius * Math.cos(phi);
    const x = -rXZ * Math.cos(theta);
    const y = radius * Math.sin(phi);
    const z = -rXZ * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // 2. Lighting setup - Enhanced for high aircraft & globe visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x60a5fa, 1.8);
    dirLight2.position.set(-6, -3, -4);
    scene.add(dirLight2);

    const dirLightTop = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLightTop.position.set(0, 8, 2);
    scene.add(dirLightTop);

    // 3. Globe Root Object
    const globeRadius = isBackground ? 2.45 : 2.3;
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = globeRotationRef.current.x;
    globeGroup.rotation.y = globeRotationRef.current.y;

    if (isBackground) {
      const isWide = width >= 1024;
      globeGroup.position.set(isWide ? 1.5 : 0, isWide ? -0.1 : 0.2, 0);
    }
    scene.add(globeGroup);

    // Globe Base Sphere with Texture
    const textureLoader = new THREE.TextureLoader();
    const mapTexture = textureLoader.load("/assets/globe-map.png", () => {
      setIsLoaded(true);
    });
    mapTexture.generateMipmaps = true;
    mapTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: mapTexture,
      roughness: 0.6,
      metalness: 0.1,
      emissive: new THREE.Color(0x0a192f),
      emissiveIntensity: 0.1,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(globeMesh);

    // Atmosphere Glow Sphere (outer luminous rim in Travsior blue)
    const atmosphereGeo = new THREE.SphereGeometry(globeRadius * 1.04, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.035, 0.345, 0.85, intensity * 0.6); // #0958D9 glow
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // Inner Glow Rim for subtle depth
    const innerAtmosphereGeo = new THREE.SphereGeometry(globeRadius * 1.006, 48, 48);
    const innerAtmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          gl_FragColor = vec4(0.22, 0.74, 0.97, pow(intensity, 3.0) * 0.35); // Cyan rim #38bdf8
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
    });
    const innerAtmosphereMesh = new THREE.Mesh(innerAtmosphereGeo, innerAtmosphereMat);
    globeGroup.add(innerAtmosphereMesh);

    // Background subtle star dust particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const dist = 3.6 + Math.random() * 3.5;
      particlePos[i] = dist * Math.sin(phi) * Math.cos(theta);
      particlePos[i + 1] = dist * Math.sin(phi) * Math.sin(theta);
      particlePos[i + 2] = dist * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Create Destination Pins on Globe
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    const destinationVectors: Record<string, THREE.Vector3> = {};
    const rippleMeshes: { mesh: THREE.Mesh; initialScale: number }[] = [];

    DESTINATIONS.forEach((dest) => {
      const vec = latLngToVector(dest.lat, dest.lng, globeRadius);
      destinationVectors[dest.id] = vec;

      // Solid pin dot
      const dotGeo = new THREE.SphereGeometry(0.05, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8, // Vibrant cyan
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(vec.clone().multiplyScalar(1.002));
      pinGroup.add(dot);

      // Inner glowing core
      const coreGeo = new THREE.SphereGeometry(0.026, 12, 12);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.copy(vec.clone().multiplyScalar(1.003));
      pinGroup.add(core);

      // Expanding radar ripple ring
      const ringGeo = new THREE.RingGeometry(0.05, 0.11, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x0958d9,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(vec.clone().multiplyScalar(1.004));
      ring.lookAt(vec.clone().multiplyScalar(2));
      pinGroup.add(ring);
      rippleMeshes.push({ mesh: ring, initialScale: 1 });
    });

    // 5. High-Visibility Airplane 3D Mesh Generator
    const createAirplane = () => {
      const group = new THREE.Group();

      // Fuselage: aerodynamic tapered body in bright illuminated white
      const fuselageGeo = new THREE.ConeGeometry(0.045, 0.36, 12);
      fuselageGeo.rotateX(Math.PI / 2); // Point forward along +Z
      const fuselageMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 0.45,
        roughness: 0.2,
        metalness: 0.1,
      });
      const fuselage = new THREE.Mesh(fuselageGeo, fuselageMat);
      group.add(fuselage);

      // Cockpit tinted windshield
      const cockpitGeo = new THREE.BoxGeometry(0.038, 0.026, 0.08);
      const cockpitMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
      const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
      cockpit.position.set(0, 0.028, 0.05);
      group.add(cockpit);

      // Cheatline (luminous cyan speed stripe along fuselage)
      const stripeGeo = new THREE.CylinderGeometry(0.046, 0.046, 0.18, 12, 1, true);
      stripeGeo.rotateX(Math.PI / 2);
      const stripeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.position.set(0, 0, -0.02);
      group.add(stripe);

      // Main Swept Wings: bright crisp white with high visibility
      const wingShape = new THREE.Shape();
      wingShape.moveTo(0, 0.08);
      wingShape.lineTo(0.32, -0.08);
      wingShape.lineTo(0.29, -0.13);
      wingShape.lineTo(0, -0.04);
      wingShape.lineTo(-0.29, -0.13);
      wingShape.lineTo(-0.32, -0.08);
      wingShape.closePath();

      const wingExtrude = new THREE.ExtrudeGeometry(wingShape, {
        depth: 0.012,
        bevelEnabled: false,
      });
      wingExtrude.rotateX(Math.PI / 2);
      const wingMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: new THREE.Color(0xf0f9ff),
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.1,
      });
      const wings = new THREE.Mesh(wingExtrude, wingMat);
      group.add(wings);

      // Wingtips: High-contrast Travsior Blue
      const tipGeo = new THREE.BoxGeometry(0.015, 0.04, 0.05);
      const tipMat = new THREE.MeshBasicMaterial({ color: 0x0958d9 });
      const leftTip = new THREE.Mesh(tipGeo, tipMat);
      leftTip.position.set(-0.31, 0.015, -0.09);
      group.add(leftTip);

      const rightTip = new THREE.Mesh(tipGeo, tipMat);
      rightTip.position.set(0.31, 0.015, -0.09);
      group.add(rightTip);

      // Navigation Strobe Lights:
      // Port (Left wing) = Bright Red
      const redLightGeo = new THREE.SphereGeometry(0.02, 8, 8);
      const redLightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
      const redLight = new THREE.Mesh(redLightGeo, redLightMat);
      redLight.position.set(-0.32, 0.02, -0.08);
      group.add(redLight);

      // Starboard (Right wing) = Bright Green
      const greenLightGeo = new THREE.SphereGeometry(0.02, 8, 8);
      const greenLightMat = new THREE.MeshBasicMaterial({ color: 0x00ff66 });
      const greenLight = new THREE.Mesh(greenLightGeo, greenLightMat);
      greenLight.position.set(0.32, 0.02, -0.08);
      group.add(greenLight);

      // Vertical Tail Fin: Aerodynamic & High-contrast
      const tailShape = new THREE.Shape();
      tailShape.moveTo(0, 0);
      tailShape.lineTo(0.12, 0);
      tailShape.lineTo(0.06, 0.12);
      tailShape.lineTo(0, 0.12);
      tailShape.closePath();
      const tailGeo = new THREE.ExtrudeGeometry(tailShape, {
        depth: 0.008,
        bevelEnabled: false,
      });
      tailGeo.rotateY(Math.PI / 2);
      tailGeo.translate(0, 0.02, -0.12);
      const tailMat = new THREE.MeshStandardMaterial({
        color: 0x0958d9,
        emissive: new THREE.Color(0x0958d9),
        emissiveIntensity: 0.4,
      });
      const tailMesh = new THREE.Mesh(tailGeo, tailMat);
      group.add(tailMesh);

      // Tail Strobe (White)
      const tailStrobeGeo = new THREE.SphereGeometry(0.016, 8, 8);
      const tailStrobeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const tailStrobe = new THREE.Mesh(tailStrobeGeo, tailStrobeMat);
      tailStrobe.position.set(0, 0.14, -0.16);
      group.add(tailStrobe);

      // Jet Engines: Dual Turbofans with bright glowing cyan exhaust
      const engineGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.08, 10);
      engineGeo.rotateX(Math.PI / 2);
      const engineMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        emissive: new THREE.Color(0x94a3b8),
        emissiveIntensity: 0.3,
      });
      const leftEngine = new THREE.Mesh(engineGeo, engineMat);
      leftEngine.position.set(-0.11, -0.025, -0.02);
      group.add(leftEngine);

      const rightEngine = new THREE.Mesh(engineGeo, engineMat);
      rightEngine.position.set(0.11, -0.025, -0.02);
      group.add(rightEngine);

      // Intense Glowing Jet Exhaust Plumes
      const exhaustMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const exhaustGeo = new THREE.ConeGeometry(0.016, 0.06, 8);
      exhaustGeo.rotateX(-Math.PI / 2); // Pointing backwards

      const leftExhaust = new THREE.Mesh(exhaustGeo, exhaustMat);
      leftExhaust.position.set(-0.11, -0.025, -0.08);
      group.add(leftExhaust);

      const rightExhaust = new THREE.Mesh(exhaustGeo, exhaustMat);
      rightExhaust.position.set(0.11, -0.025, -0.08);
      group.add(rightExhaust);

      // Glowing Aura / Halo around the entire aircraft for high visibility
      const auraGeo = new THREE.SphereGeometry(0.24, 16, 16);
      const auraMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide,
      });
      const aura = new THREE.Mesh(auraGeo, auraMat);
      group.add(aura);

      // Scaled up by 2.2x so the aircraft is prominently visible and recognizable!
      group.scale.set(2.2, 2.2, 2.2);
      return group;
    };

    // 6. Setup Active Flight Routes
    const flightRoutes: FlightRoute[] = [
      {
        id: "flight-1",
        from: DESTINATIONS.find((d) => d.id === "uk")!, // London -> Sydney
        to: DESTINATIONS.find((d) => d.id === "au")!,
        speed: 0.0016,
        progress: 0.08,
        altitude: 0.65,
      },
      {
        id: "flight-2",
        from: DESTINATIONS.find((d) => d.id === "us")!, // New York -> Berlin
        to: DESTINATIONS.find((d) => d.id === "de")!,
        speed: 0.0022,
        progress: 0.42,
        altitude: 0.55,
      },
      {
        id: "flight-3",
        from: DESTINATIONS.find((d) => d.id === "ae")!, // Dubai -> Toronto
        to: DESTINATIONS.find((d) => d.id === "ca")!,
        speed: 0.0018,
        progress: 0.72,
        altitude: 0.62,
      },
      {
        id: "flight-4",
        from: DESTINATIONS.find((d) => d.id === "jp")!, // Tokyo -> Paris
        to: DESTINATIONS.find((d) => d.id === "fr")!,
        speed: 0.0019,
        progress: 0.25,
        altitude: 0.60,
      },
      {
        id: "flight-5",
        from: DESTINATIONS.find((d) => d.id === "ie")!, // Dublin -> UAE
        to: DESTINATIONS.find((d) => d.id === "ae")!,
        speed: 0.0021,
        progress: 0.88,
        altitude: 0.58,
      },
    ];

    // Build Curve Geometries and Airplanes
    interface RuntimeFlight {
      route: FlightRoute;
      curve: THREE.QuadraticBezierCurve3;
      planeMesh: THREE.Group;
      trailMesh: THREE.Line;
      trailPositions: Float32Array;
      lineCurveMesh: THREE.Line;
    }

    const runtimeFlights: RuntimeFlight[] = flightRoutes.map((route) => {
      // Elevate endpoints slightly above sphere so airplanes cruise cleanly above atmosphere
      const p1 = destinationVectors[route.from.id].clone().multiplyScalar(1.05);
      const p2 = destinationVectors[route.to.id].clone().multiplyScalar(1.05);
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const controlPoint = mid.clone().normalize().multiplyScalar(globeRadius + route.altitude + 0.35);
      const curve = new THREE.QuadraticBezierCurve3(p1, controlPoint, p2);

      // Full Great Circle Flight Path (subtle dashed line)
      const pathPoints = curve.getPoints(60);
      const pathGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
      const pathMat = new THREE.LineDashedMaterial({
        color: 0x38bdf8,
        dashSize: 0.09,
        gapSize: 0.04,
        opacity: 0.45,
        transparent: true,
      });
      const lineCurveMesh = new THREE.Line(pathGeo, pathMat);
      lineCurveMesh.computeLineDistances();
      globeGroup.add(lineCurveMesh);

      // Trailing Glowing Contrail behind plane
      const trailPointCount = 36;
      const trailPositions = new Float32Array(trailPointCount * 3);
      const trailGeo = new THREE.BufferGeometry();
      trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
      const trailMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.95,
        linewidth: 3,
      });
      const trailMesh = new THREE.Line(trailGeo, trailMat);
      globeGroup.add(trailMesh);

      // Airplane Mesh
      const planeMesh = createAirplane();
      globeGroup.add(planeMesh);

      return {
        route,
        curve,
        planeMesh,
        trailMesh,
        trailPositions,
        lineCurveMesh,
      };
    });

    // 7. Event Handlers for Dragging & Rotating Globe
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      targetRotationRef.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };

      globeRotationRef.current.y += dx * 0.005;
      globeRotationRef.current.x = Math.max(-0.8, Math.min(0.8, globeRotationRef.current.x + dy * 0.005));

      rotationVelocityRef.current = {
        x: dy * 0.001,
        y: dx * 0.001,
      };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch Support for Mobile / Tablet
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        targetRotationRef.current = null;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - lastMousePosRef.current.x;
      const dy = e.touches[0].clientY - lastMousePosRef.current.y;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      globeRotationRef.current.y += dx * 0.006;
      globeRotationRef.current.x = Math.max(-0.8, Math.min(0.8, globeRotationRef.current.x + dy * 0.006));
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // 8. Handle Window / Container Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (isBackground) {
        const isWide = width >= 1024;
        globeGroup.position.set(isWide ? 1.5 : 0, isWide ? -0.1 : 0.2, 0);
      }
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth auto-revolution or target alignment
      if (targetRotationRef.current) {
        const target = targetRotationRef.current;
        globeRotationRef.current.y += (target.y - globeRotationRef.current.y) * 0.05;
        globeRotationRef.current.x += (target.x - globeRotationRef.current.x) * 0.05;

        if (
          Math.abs(target.y - globeRotationRef.current.y) < 0.001 &&
          Math.abs(target.x - globeRotationRef.current.x) < 0.001
        ) {
          targetRotationRef.current = null;
        }
      } else if (!isDraggingRef.current) {
        // Natural gentle revolving
        const baseSpeed = isHovered ? 0.001 : 0.0028;
        globeRotationRef.current.y += baseSpeed;

        // Apply slight damping to residual velocity
        rotationVelocityRef.current.y *= 0.95;
        rotationVelocityRef.current.x *= 0.95;
        globeRotationRef.current.y += rotationVelocityRef.current.y;
        globeRotationRef.current.x += rotationVelocityRef.current.x;
        globeRotationRef.current.x = Math.max(-0.8, Math.min(0.8, globeRotationRef.current.x));
      }

      globeGroup.rotation.y = globeRotationRef.current.y;
      globeGroup.rotation.x = globeRotationRef.current.x;

      // Animate Ripple Rings
      rippleMeshes.forEach((ripple, idx) => {
        const s = 1 + Math.sin(elapsedTime * 3 + idx * 0.8) * 0.35;
        ripple.mesh.scale.set(s, s, s);
      });

      // Update Flights, Airplanes, and Popups
      const newPopups: Record<string, ActivePopup> = {};
      const newPlaneTags: Record<string, PlaneTag> = {};

      runtimeFlights.forEach((flight) => {
        flight.route.progress += flight.route.speed;
        if (flight.route.progress > 1) {
          flight.route.progress = 0;
        }

        const t = flight.route.progress;
        const currentPos = flight.curve.getPoint(t);
        const tangent = flight.curve.getTangent(t).normalize();

        // Position & Orient Airplane Mesh correctly with 'up' vector
        flight.planeMesh.position.copy(currentPos);
        const upVector = currentPos.clone().normalize();
        flight.planeMesh.up.copy(upVector);
        const lookTarget = currentPos.clone().add(tangent);
        flight.planeMesh.lookAt(lookTarget);

        // Update glowing contrail behind airplane
        const trailPositions = flight.trailPositions;
        const trailPointsCount = trailPositions.length / 3;
        for (let i = 0; i < trailPointsCount; i++) {
          const trailT = Math.max(0, t - (i / trailPointsCount) * 0.16);
          const p = flight.curve.getPoint(trailT);
          trailPositions[i * 3] = p.x;
          trailPositions[i * 3 + 1] = p.y;
          trailPositions[i * 3 + 2] = p.z;
        }
        flight.trailMesh.geometry.attributes.position.needsUpdate = true;

        // Plane Callout Tag (follows plane in 3D)
        const worldPlanePos = currentPos.clone().applyMatrix4(globeGroup.matrixWorld);
        const planeNormal = worldPlanePos.clone().normalize();
        const camDir = camera.position.clone().sub(worldPlanePos).normalize();
        const planeDot = planeNormal.dot(camDir);

        if (planeDot > 0.15) {
          const proj = worldPlanePos.clone().project(camera);
          const px = (proj.x * 0.5 + 0.5) * width;
          const py = (-(proj.y * 0.5) + 0.5) * height;

          newPlaneTags[flight.route.id] = {
            flightId: flight.route.id,
            routeText: `${flight.route.from.code} ✈ ${flight.route.to.code}`,
            screenX: px,
            screenY: py,
            visible: true,
          };
        }

        // Determine Popup Trigger State:
        // 1. When plane is departing: from 0.0 to 0.36
        // 2. When plane is arriving: from 0.64 to 1.0
        if (t >= 0.0 && t <= 0.36) {
          // Departure popup at origin
          const dest = flight.route.from;
          const localVec = destinationVectors[dest.id];
          const worldVec = localVec.clone().applyMatrix4(globeGroup.matrixWorld);

          // Occlusion check (facing camera normal)
          const normal = worldVec.clone().normalize();
          const toCam = camera.position.clone().sub(worldVec).normalize();
          const dot = normal.dot(toCam);

          if (dot > 0.12) {
            const projected = worldVec.clone().project(camera);
            const sx = (projected.x * 0.5 + 0.5) * width;
            const sy = (-(projected.y * 0.5) + 0.5) * height;

            newPopups[dest.id] = {
              destination: dest,
              type: "departure",
              flightId: flight.route.id,
              screenX: sx,
              screenY: sy,
              visible: true,
              statusText: `Flight departing to ${flight.route.to.country}`,
              statusEmoji: "🛫",
            };
          }
        } else if (t >= 0.64 && t <= 1.0) {
          // Arrival popup at destination
          const dest = flight.route.to;
          const localVec = destinationVectors[dest.id];
          const worldVec = localVec.clone().applyMatrix4(globeGroup.matrixWorld);

          const normal = worldVec.clone().normalize();
          const toCam = camera.position.clone().sub(worldVec).normalize();
          const dot = normal.dot(toCam);

          if (dot > 0.12) {
            const projected = worldVec.clone().project(camera);
            const sx = (projected.x * 0.5 + 0.5) * width;
            const sy = (-(projected.y * 0.5) + 0.5) * height;

            newPopups[dest.id] = {
              destination: dest,
              type: "arrival",
              flightId: flight.route.id,
              screenX: sx,
              screenY: sy,
              visible: true,
              statusText: `Arriving from ${flight.route.from.country}`,
              statusEmoji: "🛬",
            };
          }
        }
      });

      // If user selected a specific country manually, keep its popup pinned
      if (selectedCountry) {
        const dest = DESTINATIONS.find((d) => d.id === selectedCountry);
        if (dest && destinationVectors[dest.id]) {
          const localVec = destinationVectors[dest.id];
          const worldVec = localVec.clone().applyMatrix4(globeGroup.matrixWorld);
          const normal = worldVec.clone().normalize();
          const toCam = camera.position.clone().sub(worldVec).normalize();
          const dot = normal.dot(toCam);

          if (dot > 0.05) {
            const projected = worldVec.clone().project(camera);
            const sx = (projected.x * 0.5 + 0.5) * width;
            const sy = (-(projected.y * 0.5) + 0.5) * height;

            newPopups[dest.id] = {
              destination: dest,
              type: "manual",
              screenX: sx,
              screenY: sy,
              visible: true,
              statusText: dest.highlight,
              statusEmoji: "✨",
            };
          }
        }
      }

      setActivePopups(newPopups);
      setPlaneTags(newPlaneTags);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      renderer.dispose();
    };
  }, [latLngToVector, selectedCountry, isHovered]);

  // Handle clicking a country pill to rotate globe to it
  const focusCountry = (dest: Destination) => {
    setSelectedCountry(dest.id);
    if (onSelectDestination) {
      onSelectDestination(dest.country);
    }

    // Convert lat/lng to required globe rotation to center it in view
    const targetY = -((dest.lng + 180) * Math.PI) / 180 + Math.PI / 2;
    const targetX = (dest.lat * Math.PI) / 180 * 0.45;
    targetRotationRef.current = {
      x: targetX,
      y: targetY,
    };
  };

  return (
    <div
      ref={containerRef}
      className={
        isBackground
          ? `relative w-full h-full select-none overflow-hidden ${className}`
          : `relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#091a2e] via-[#0d233a] to-[#0a192f] border-2 border-blue-500/20 shadow-2xl select-none group ${className}`
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ touchAction: "none" }}
    >
      {/* Top Status Bar Inside Card (only in card mode) */}
      {!isBackground && (
        <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-travsior-navy/80 border border-blue-400/30 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-white tracking-wide">
              Global Visa &amp; Study Routes
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-medium text-blue-100 shadow-lg">
            <Compass className="w-3.5 h-3.5 text-blue-300 animate-spin-slow" />
            <span>Drag to rotate</span>
          </div>
        </div>
      )}

      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />

      {/* Floating 3D Airplane Route Tags */}
      {Object.entries(planeTags).map(([id, tag]) => {
        if (!tag.visible) return null;
        return (
          <div
            key={`plane-tag-${id}`}
            className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-[150%] transition-transform duration-100"
            style={{
              left: `${tag.screenX}px`,
              top: `${tag.screenY}px`,
            }}
          >
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-travsior-navy/90 border border-sky-400/50 text-xs font-bold text-white shadow-float backdrop-blur-sm">
              <span className="text-sky-300">✈</span>
              <span>{tag.routeText}</span>
            </div>
          </div>
        );
      })}

      {/* Dynamic Popups for Departures / Arrivals / Locations */}
      {Object.entries(activePopups).map(([id, popup]) => {
        if (!popup.visible) return null;
        return (
          <div
            key={id}
            className="absolute z-30 transition-transform duration-150 -translate-x-1/2 -translate-y-[115%] pointer-events-auto"
            style={{
              left: `${popup.screenX}px`,
              top: `${popup.screenY}px`,
            }}
          >
            <div
              onClick={() => focusCountry(popup.destination)}
              className="cursor-pointer group/popup relative flex flex-col p-2.5 sm:p-3 rounded-card bg-white/95 backdrop-blur-md border-2 border-travsior-blue shadow-float hover:shadow-cardHover transition-all hover:scale-105 active:scale-95 text-left min-w-[170px] sm:min-w-[200px]"
            >
              {/* Country Name + Location Emoji Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg animate-bounce" role="img" aria-label="Location pin">
                    📍
                  </span>
                  <span className="text-base sm:text-lg" role="img" aria-label={popup.destination.country}>
                    {popup.destination.flag}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-travsior-navy leading-tight">
                    {popup.destination.country}
                  </span>
                </div>
                <span className="px-1.5 py-0.5 rounded-btn bg-blue-50 text-xs font-bold text-travsior-blue border border-blue-200">
                  {popup.destination.code}
                </span>
              </div>

              {/* Status Badge */}
              <div className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-travsior-navyMuted">
                <span>{popup.statusEmoji}</span>
                <span className="truncate">{popup.statusText}</span>
              </div>

              {/* Visa / University Highlights */}
              <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-travsior-blue group-hover/popup:text-travsior-blueHover">
                <span>{popup.destination.city} Hub</span>
                <span className="inline-flex items-center gap-0.5">
                  Explore <ExternalLink className="w-3 h-3" />
                </span>
              </div>

              {/* Downward Anchor Arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-travsior-blue rotate-45" />
            </div>
          </div>
        );
      })}

      {/* Bottom Destination Quick Pills Carousel (only in card mode) */}
      {!isBackground && (
        <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 z-20 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1 text-xs font-semibold text-blue-200">
            <span className="inline-flex items-center gap-1">
              <Plane className="w-3.5 h-3.5 text-blue-400 rotate-45" />
              Featured Destinations:
            </span>
            <span className="text-blue-300 text-xs font-medium">Click country to navigate</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar mask-fade">
            {DESTINATIONS.map((dest) => {
              const isSelected = selectedCountry === dest.id;
              return (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => focusCountry(dest)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all backdrop-blur-md ${
                    isSelected
                      ? "bg-travsior-blue text-white shadow-md shadow-blue-500/40 border border-blue-300 scale-105"
                      : "bg-travsior-navy/70 text-blue-100 border border-blue-400/20 hover:bg-travsior-navy hover:text-white hover:border-blue-300/50"
                  }`}
                >
                  <span>{dest.flag}</span>
                  <span>{dest.code}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0a192f] flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-semibold text-blue-200">
            Rendering 3D Global Routes...
          </span>
        </div>
      )}
    </div>
  );
};
