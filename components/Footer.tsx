import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-serif text-primary tracking-tight mb-4 inline-block">
                            <span className="font-bold">PRISM</span><span className="font-normal">Math</span>
                        </Link>
                        <p className="text-gray-500 max-w-sm">
                            Architecting the next generation of mathematical thinkers in Austin.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Location & Contact</h4>
                        <div className="space-y-4 text-gray-600 text-sm">
                            <div>
                                <p className="font-medium text-primary">Private Learning Lab</p>
                                <p>Northwest Austin (Spicewood Springs/Anderson Mill/Avery Ranch/Cedar Park area)</p>
                            </div>

                            <p className="text-xs text-gray-400 leading-relaxed italic border-l-2 border-accent/30 pl-3 max-w-md">
                                To maintain the security and focused environment of our student cohorts, our exact location is provided to families following a successful Consultation.
                            </p>

                            <div>
                                <a href="mailto:dr@prismmath.com" className="text-primary hover:text-accent font-medium transition-colors">
                                    dr@prismmath.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2026 PRISMMath Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
