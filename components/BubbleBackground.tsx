export default function BubbleBackground() {
  // Generate 40 bubbles with random properties
  const bubbles = Array.from({ length: 40 }, (_, i) => {
    const sizes = [15, 25, 35, 45, 60, 75];
    const colors = [
      'bg-blue-200/20 dark:bg-blue-900/10',
      'bg-purple-200/15 dark:bg-purple-900/8',
      'bg-white/10 dark:bg-gray-700/5',
    ];

    return {
      id: i,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      left: Math.random() * 100, // 0-100%
      bottom: Math.random() * 100, // 0-100% - initial vertical position
      delay: Math.random() * 10, // 0-10s (reduced from 20s)
      duration: 6 + Math.random() * 8, // 6-14s (faster, was 15-35s)
      driftX: (Math.random() - 0.5) * 60, // -30 to 30px
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  });

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} animate-bubble-float animate-bubble-drift`}
          style={{
            left: `${bubble.left}%`,
            bottom: `${bubble.bottom}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s, ${bubble.delay}s`,
            animationDuration: `${bubble.duration}s, ${bubble.duration * 0.8}s`,
            ['--drift-x' as string]: `${bubble.driftX}px`,
            boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)',
          }}
        />
      ))}
    </div>
  );
}
