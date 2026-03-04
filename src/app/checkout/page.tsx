"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Check, CreditCard, Lock, Zap, Sparkles, Building2, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        description: 'Small teams getting started',
        monthlyPrice: 49,
        yearlyPrice: 39,
        icon: Zap,
        features: [
            'Track up to 3 brands',
            '5,000 prompts/month',
            'ChatGPT & Perplexity',
            'Basic analytics',
            'Email support',
            '7-day data history',
        ],
        popular: false,
    },
    {
        id: 'professional',
        name: 'Professional',
        description: 'For growing businesses that need more',
        monthlyPrice: 149,
        yearlyPrice: 119,
        icon: Sparkles,
        features: [
            'Track up to 10 brands',
            '25,000 prompts/month',
            'All AI platforms',
            'Advanced analytics',
            'Priority support',
            '90-day data history',
            'Competitor tracking',
            'Custom reports',
            'API access',
        ],
        popular: true,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'For large organizations with custom needs',
        monthlyPrice: null,
        yearlyPrice: null,
        icon: Building2,
        features: [
            'Unlimited brands',
            'Unlimited prompts',
            'All AI platforms + beta',
            'Custom analytics',
            'Dedicated support',
            'Unlimited history',
            'Advanced competitor intel',
            'White-label reports',
        ],
        popular: false,
    },
];

function formatCard(value: string) {
    return value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value: string) {
    const clean = value.replace(/\D/g, '').slice(0, 4);
    if (clean.length >= 3) return clean.slice(0, 2) + '/' + clean.slice(2);
    return clean;
}

function CheckoutContent() {
    const searchParams = useSearchParams();
    const planParam = searchParams.get('plan');

    const [selectedPlanId, setSelectedPlanId] = useState<string>(planParam || 'professional');
    const [isYearly, setIsYearly] = useState(true);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardName, setCardName] = useState('');
    const [billingName, setBillingName] = useState('');
    const [billingEmail, setBillingEmail] = useState('');

    const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];
    const price = isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice;
    const annual = price ? price * 12 : null;

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(117, 251, 76, 0.12), transparent)` }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: `radial-gradient(ellipse 60% 40% at 80% 80%, rgba(210, 46, 156, 0.08), transparent)` }}
                />
            </div>
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo_03.png" alt="Logo" className="h-12 w-auto" />
                    </Link>
                    <Link
                        href="/#pricing"
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Fiyatlandırmaya Dön
                    </Link>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {/* Title */}
                    <div className="text-center mb-12 pt-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5">
                            <ShieldCheck className="w-4 h-4 text-[#75fb4c]" />
                            <span className="text-sm text-[#75fb4c]">Güvenli Ödeme</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                            Planınızı <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#75fb4c] to-[#d22e9c]">Seçin</span>
                        </h1>
                        <p className="text-white/50 text-base">14 gün ücretsiz deneme. Kredi kartı bilgisi gerekmez.</p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
                        {/* LEFT: Plan selection + payment */}
                        <div className="space-y-6">
                            {/* Plan Selection */}
                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-lg font-semibold text-white">Plan Seçimi</h2>
                                    {/* Billing toggle */}
                                    <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                        <span className={`text-xs ${!isYearly ? 'text-white' : 'text-white/40'}`}>Aylık</span>
                                        <Switch
                                            checked={isYearly}
                                            onCheckedChange={setIsYearly}
                                            className="data-[state=checked]:bg-[#75fb4c] scale-90"
                                        />
                                        <span className={`text-xs ${isYearly ? 'text-white' : 'text-white/40'}`}>
                                            Yıllık <span className="text-[#75fb4c] ml-1">-20%</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-3 gap-3">
                                    {plans.map((plan) => {
                                        const PlanIcon = plan.icon;
                                        const planPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
                                        const isSelected = selectedPlanId === plan.id;
                                        return (
                                            <button
                                                key={plan.id}
                                                id={`plan-${plan.id}`}
                                                onClick={() => setSelectedPlanId(plan.id)}
                                                className={`relative rounded-xl p-4 text-left transition-all duration-300 border ${isSelected
                                                        ? 'bg-[#75fb4c]/10 border-[#75fb4c]/50 shadow-lg shadow-[#75fb4c]/10'
                                                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5'
                                                    }`}
                                            >
                                                {plan.popular && (
                                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                                                        <span className="px-2.5 py-0.5 rounded-full bg-[#75fb4c] text-[#050505] text-[10px] font-bold whitespace-nowrap">
                                                            En Popüler
                                                        </span>
                                                    </div>
                                                )}
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-[#75fb4c]/20' : 'bg-white/5'}`}>
                                                    <PlanIcon className={`w-4 h-4 ${isSelected ? 'text-[#75fb4c]' : 'text-white/50'}`} />
                                                </div>
                                                <div className={`text-sm font-semibold mb-0.5 ${isSelected ? 'text-white' : 'text-white/70'}`}>
                                                    {plan.name}
                                                </div>
                                                {planPrice ? (
                                                    <div className={`text-xl font-bold ${isSelected ? 'text-[#75fb4c]' : 'text-white/60'}`}>
                                                        ${planPrice}
                                                        <span className="text-xs font-normal text-white/30">/ay</span>
                                                    </div>
                                                ) : (
                                                    <div className={`text-base font-bold ${isSelected ? 'text-[#75fb4c]' : 'text-white/60'}`}>
                                                        Özel
                                                    </div>
                                                )}
                                                {isSelected && (
                                                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#75fb4c] flex items-center justify-center">
                                                        <Check className="w-3 h-3 text-[#050505]" />
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Payment Form */}
                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                                <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-[#75fb4c]" />
                                    Ödeme Bilgileri
                                </h2>

                                <div className="space-y-4">
                                    {/* Card Number */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-white/40 font-medium uppercase tracking-wide">Kart Numarası</label>
                                        <div className="relative">
                                            <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                            <input
                                                id="card-number"
                                                type="text"
                                                placeholder="1234 5678 9012 3456"
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(formatCard(e.target.value))}
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300 tracking-wider"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Expiry */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/40 font-medium uppercase tracking-wide">Son Kullanma</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="card-expiry"
                                                    type="text"
                                                    placeholder="AA/YY"
                                                    value={expiry}
                                                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                        {/* CVV */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-white/40 font-medium uppercase tracking-wide">CVV</label>
                                            <div className="relative">
                                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                <input
                                                    id="card-cvv"
                                                    type="text"
                                                    placeholder="123"
                                                    maxLength={4}
                                                    value={cvv}
                                                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card name */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-white/40 font-medium uppercase tracking-wide">Kart Sahibi Adı</label>
                                        <input
                                            id="card-name"
                                            type="text"
                                            placeholder="Adınız Soyadınız"
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-4 my-5">
                                    <div className="flex-1 h-px bg-white/10" />
                                    <span className="text-xs text-white/30">Fatura Bilgileri</span>
                                    <div className="flex-1 h-px bg-white/10" />
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-white/40 font-medium uppercase tracking-wide">Ad Soyad</label>
                                        <input
                                            id="billing-name"
                                            type="text"
                                            placeholder="Fatura adı"
                                            value={billingName}
                                            onChange={(e) => setBillingName(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-white/40 font-medium uppercase tracking-wide">E-posta</label>
                                        <input
                                            id="billing-email"
                                            type="email"
                                            placeholder="fatura@sirket.com"
                                            value={billingEmail}
                                            onChange={(e) => setBillingEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#75fb4c]/50 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Order summary */}
                        <div className="space-y-4 lg:sticky lg:top-8">
                            {/* Selected plan summary */}
                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                                <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#75fb4c]/30 to-transparent -translate-x-1/2" />
                                {selectedPlan.popular && (
                                    <div className="bg-[#75fb4c]/10 border-b border-[#75fb4c]/20 px-6 py-2.5 flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-[#75fb4c]" />
                                        <span className="text-xs text-[#75fb4c] font-medium">En Popüler Plan</span>
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-base font-semibold text-white/70 mb-4">Sipariş Özeti</h3>

                                    {/* Plan name + price */}
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <div className="text-lg font-bold text-white">{selectedPlan.name}</div>
                                            <div className="text-xs text-white/40">{isYearly ? 'Yıllık fatura' : 'Aylık fatura'}</div>
                                        </div>
                                        {price ? (
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-[#75fb4c]">${price}</div>
                                                <div className="text-xs text-white/40">/ay</div>
                                            </div>
                                        ) : (
                                            <div className="text-xl font-bold text-white">Özel</div>
                                        )}
                                    </div>

                                    {isYearly && annual && (
                                        <div className="flex items-center justify-between text-sm text-white/40 mb-5 pb-5 border-b border-white/10">
                                            <span>Yıllık toplam</span>
                                            <span className="text-white/60">${annual}</span>
                                        </div>
                                    )}

                                    {/* Features */}
                                    <div className="space-y-2.5 mb-6">
                                        {selectedPlan.features.slice(0, 6).map((f, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <div className="w-4 h-4 rounded-full bg-[#75fb4c]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-2.5 h-2.5 text-[#75fb4c]" />
                                                </div>
                                                <span className="text-sm text-white/50">{f}</span>
                                            </div>
                                        ))}
                                        {selectedPlan.features.length > 6 && (
                                            <div className="text-xs text-white/30 pl-6.5">
                                                +{selectedPlan.features.length - 6} özellik daha
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    {selectedPlan.id !== 'enterprise' ? (
                                        <Button
                                            id="btn-complete-purchase"
                                            className="w-full py-3 bg-[#75fb4c] text-[#050505] font-semibold hover:bg-[#75fb4c]/90 shadow-lg shadow-[#75fb4c]/20 rounded-xl transition-all duration-300"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Satın Almayı Tamamla
                                        </Button>
                                    ) : (
                                        <Link href="/login">
                                            <Button
                                                id="btn-contact-sales"
                                                className="w-full py-3 bg-white/10 text-white font-semibold hover:bg-white/15 rounded-xl border border-white/20 transition-all duration-300"
                                            >
                                                Satış Ekibiyle Görüş
                                            </Button>
                                        </Link>
                                    )}

                                    <div className="flex items-center justify-center gap-2 mt-4">
                                        <Lock className="w-3.5 h-3.5 text-white/30" />
                                        <span className="text-xs text-white/30">SSL ile şifreli güvenli ödeme</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: ShieldCheck, label: '256-bit SSL', sub: 'Şifreleme' },
                                    { icon: Lock, label: 'PCI DSS', sub: 'Uyumlu' },
                                ].map(({ icon: Icon, label, sub }) => (
                                    <div
                                        key={label}
                                        className="rounded-xl bg-white/[0.02] border border-white/10 p-3 flex items-center gap-2.5"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#75fb4c]/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-[#75fb4c]" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-white">{label}</div>
                                            <div className="text-[10px] text-white/40">{sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-xs text-white/25 leading-relaxed">
                                14 gün ücretsiz deneme. İstediğiniz zaman iptal edebilirsiniz. Gizli ücret yok.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

const CheckoutPage = () => (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center"><div className="text-white/30 text-sm">Yükleniyor...</div></div>}>
        <CheckoutContent />
    </Suspense>
);

export default CheckoutPage;
