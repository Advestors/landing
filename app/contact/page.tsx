'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  MessageSquare,
  Target,
  Users,
  Handshake,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    customerType: '',
    interestType: '',
    budget: '',
    message: '',
    hearAboutUs: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.customerType) newErrors.customerType = 'Please select your role';
    if (!formData.interestType) newErrors.interestType = 'Please select your interest';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (if provided)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      console.log('Form validation failed:', errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Create comprehensive JSON object with all form data
    const formDataJson = {
      personalInfo: {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        location: formData.location.trim()
      },
      preferences: {
        customerType: formData.customerType,
        interestType: formData.interestType,
        budget: formData.budget || null,
        hearAboutUs: formData.hearAboutUs || null
      },
      message: formData.message.trim(),
      submissionInfo: {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        formVersion: '1.0',
        url: window.location.href,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      validation: {
        isEmailValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
        isPhoneValid: formData.phone ? /^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, '')) : true,
        hasRequiredFields: !!(formData.firstName && formData.lastName && formData.email && formData.customerType && formData.interestType)
      }
    };

    // Log the complete JSON object to console with detailed formatting
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('📋 Form Data JSON (Pretty):', JSON.stringify(formDataJson, null, 2));
    console.log('📊 Raw Form Data Object:', formDataJson);
    console.log('📈 Form Statistics:', {
      totalFields: Object.keys(formData).length,
      filledFields: Object.values(formData).filter(value => value && value.trim()).length,
      completionRate: `${Math.round((Object.values(formData).filter(value => value && value.trim()).length / Object.keys(formData).length) * 100)}%`
    });
    console.log('================================');

    // Create query parameters from form data
    const queryParams = new URLSearchParams({
      // Personal Info
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim() || '',
      company: formData.company.trim() || '',
      location: formData.location.trim() || '',
      
      // Preferences
      customerType: formData.customerType,
      interestType: formData.interestType,
      budget: formData.budget || '',
      hearAboutUs: formData.hearAboutUs || '',
      
      // Message
      message: formData.message.trim() || '',
      
      // Submission Info
      timestamp: formDataJson.submissionInfo.timestamp,
      userAgent: formDataJson.submissionInfo.userAgent,
      referrer: formDataJson.submissionInfo.referrer,
      url: formDataJson.submissionInfo.url,
      language: formDataJson.submissionInfo.language,
      timezone: formDataJson.submissionInfo.timezone,
      formVersion: formDataJson.submissionInfo.formVersion,
      
      // Validation
      isEmailValid: formDataJson.validation.isEmailValid.toString(),
      isPhoneValid: formDataJson.validation.isPhoneValid.toString(),
      hasRequiredFields: formDataJson.validation.hasRequiredFields.toString()
    });

    // Construct webhook URL with query parameters
    const webhookUrl = `https://n8n.advestor.io/webhook/dc4f9118-c09d-4503-aa1f-d9c8f4145432?${queryParams.toString()}`;
    
    console.log('🔗 Webhook URL:', webhookUrl);
    console.log('📤 Sending data to webhook...');

    try {
      // Send data to webhook
      const response = await fetch(webhookUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('✅ Webhook sent successfully!');
        console.log('📊 Response status:', response.status);
      } else {
        console.error('❌ Webhook failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('❌ Error sending webhook:', error);
    }

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="flex items-center justify-center p-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                Thank You for Your Interest!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We've received your registration and will get back to you within 24 hours.
                Get ready to join the advertising revolution!
              </p>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <span className="text-gray-700">Our team will review your information</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <span className="text-gray-700">We'll contact you to discuss your specific needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <span className="text-gray-700">Get started with your personalized onboarding</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/40 to-purple-400/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Additional gradient layers */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-200/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-200/30 to-transparent"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.1)_25%,rgba(99,102,241,0.1)_50%,transparent_50%,transparent_75%,rgba(99,102,241,0.1)_75%)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              Join the <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Revolution</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 sm:px-0">
              Ready to transform your advertising strategy or start earning from your spaces?
              <span className="text-indigo-700 font-bold"> Let's get started together.</span>
            </p>
          </motion.div>

          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/90 backdrop-blur-md border border-white/40 shadow-lg shadow-indigo-500/10 rounded-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Join the Revolution
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Get early access and special pricing
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <User className="w-5 h-5 text-indigo-500" />
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`h-10 text-sm border rounded-lg ${
                            errors.firstName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-indigo-400'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`h-10 text-sm border rounded-lg ${
                            errors.lastName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-indigo-400'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`h-10 text-sm border rounded-lg ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-indigo-400'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`h-10 text-sm border rounded-lg ${
                            errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-indigo-400'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Company/Organization
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="h-10 text-sm border border-gray-200 focus:border-indigo-400 rounded-lg"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Location
                        </label>
                        <Input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="h-10 text-sm border border-gray-200 focus:border-indigo-400 rounded-lg"
                          placeholder="City, State/Country"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Customer Type Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-500" />
                      I am a...
                    </h3>

                    <RadioGroup
                      value={formData.customerType}
                      onValueChange={(value) => handleInputChange('customerType', value)}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors cursor-pointer">
                        <RadioGroupItem value="advertiser" id="advertiser" />
                        <label htmlFor="advertiser" className="flex items-center gap-2 cursor-pointer flex-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Target className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">Advertiser</div>
                            <div className="text-xs text-gray-600">I want to advertise my business</div>
                          </div>
                        </label>
                      </div>

                      <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors cursor-pointer">
                        <RadioGroupItem value="host" id="host" />
                        <label htmlFor="host" className="flex items-center gap-2 cursor-pointer flex-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">Host (Advestor)</div>
                            <div className="text-xs text-gray-600">I want to earn from my spaces</div>
                          </div>
                        </label>
                      </div>
                    </RadioGroup>
                    {errors.customerType && (
                      <p className="text-red-500 text-xs mt-2">{errors.customerType}</p>
                    )}
                  </div>

                  {/* Interest Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Handshake className="w-5 h-5 text-indigo-500" />
                      I'm interested in...
                    </h3>

                    <Select value={formData.interestType} onValueChange={(value) => handleInputChange('interestType', value)}>
                      <SelectTrigger className="h-10 text-sm border border-gray-200 focus:border-indigo-400 rounded-lg">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem
                          value="early-access"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Early Access Registration
                        </SelectItem>
                        <SelectItem
                          value="investment"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Investment Opportunity
                        </SelectItem>
                        <SelectItem
                          value="partnership"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Partnership
                        </SelectItem>
                        <SelectItem
                          value="advertising"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Advertising Campaign
                        </SelectItem>
                        <SelectItem
                          value="hosting"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Hosting Spaces
                        </SelectItem>
                        <SelectItem
                          value="consultation"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Free Consultation
                        </SelectItem>
                        <SelectItem
                          value="demo"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Product Demo
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.interestType && (
                      <p className="text-red-500 text-xs mt-2">{errors.interestType}</p>
                    )}
                  </div>

                  {/* Budget Range (for advertisers) */}
                  {formData.customerType === 'advertiser' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-indigo-600" />
                        Monthly Advertising Budget
                      </h3>

                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem
                            value="under-500"
                            className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            Under $500
                          </SelectItem>
                          <SelectItem
                            value="500-1000"
                            className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            $500 - $1,000
                          </SelectItem>
                          <SelectItem
                            value="1000-5000"
                            className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            $1,000 - $5,000
                          </SelectItem>
                          <SelectItem
                            value="5000-10000"
                            className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            $5,000 - $10,000
                          </SelectItem>
                          <SelectItem
                            value="10000-25000"
                            className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            $10,000 - $25,000
                          </SelectItem>
                          <SelectItem
                            value="over-25000"
                            className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            Over $25,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* How did you hear about us */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-indigo-600" />
                      How did you hear about us?
                    </h3>

                    <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange('hearAboutUs', value)}>
                      <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem
                          value="google"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Google Search
                        </SelectItem>
                        <SelectItem
                          value="social-media"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Social Media
                        </SelectItem>
                        <SelectItem
                          value="referral"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Friend/Colleague Referral
                        </SelectItem>
                        <SelectItem
                          value="advertisement"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Online Advertisement
                        </SelectItem>
                        <SelectItem
                          value="event"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Event/Conference
                        </SelectItem>
                        <SelectItem
                          value="press"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Press/News Article
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="hover:bg-indigo-50 focus:bg-indigo-100 cursor-pointer transition-colors"
                        >
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-indigo-600" />
                      Tell us more about your goals
                    </h3>

                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-24 text-sm border border-gray-200 focus:border-indigo-400 rounded-lg resize-none"
                      placeholder="Share your advertising goals, space details, or any specific questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Zap className="w-6 h-6" />
                          <span>Join the Revolution</span>
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/40 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Early Access</h3>
              <p className="text-gray-600 text-sm">Get exclusive access to new features and special pricing</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/40 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Support</h3>
              <p className="text-gray-600 text-sm">Dedicated onboarding and 24/7 customer support</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/40 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-gray-600 text-sm">Get started in minutes with our streamlined process</p>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}