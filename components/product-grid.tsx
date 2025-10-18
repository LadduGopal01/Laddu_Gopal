"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface Product {
  name: string
  image: string
  description: string
}

interface FormData {
  name: string
  contact: string
  lookingFor: string[]
  quantity: string
  whoAreYou: string[]
  remarks: string
}

interface SubmitStatus {
  type: string
  message: string
}

const PRODUCTS: Product[] = [
  { 
    name: "Swarna Parboiled Rice", 
    image: "/images/Rice/Swarna Parboiled Rice.jpg",
    description: "Premium Swarna variety with excellent aroma and taste, processed with advanced parboiling techniques."
  },
  { 
    name: "Common Parboiled Rice (Mota)", 
    image: "/images/Rice/Common Parboiled rice.jpg",
    description: "High-quality parboiled rice with enhanced nutritional value and extended shelf life."
  },
  { 
    name: "IR 64 Parboiled Rice", 
    image: "/images/Rice/ir 64 parboiled rice.jpg",
    description: "Long-grain IR 64 variety known for its superior cooking quality and non-sticky texture."
  },
  { 
    name: "Raw Rice", 
    image: "/images/Rice/Raw rice.jpg",
    description: "Pure, unprocessed rice grains maintaining natural nutrients and authentic flavor."
  },
  { 
    name: "100 Broken Raw Rice", 
    image: "/images/Rice/100 Broken Raw Rice.jpg",
    description: "Cost-effective broken rice ideal for various culinary applications and food processing."
  },
  { 
    name: "Puffed Rice (Muri Rice)", 
    image: "/images/Rice/Puffed Rice.jpg",
    description: "Light, crispy puffed rice perfect for snacks, cereals, and traditional preparations."
  },
  { 
    name: "Biomass Pellets", 
    image: "/images/Rice/Biomass Pellets.jpg",
    description: "Eco-friendly fuel pellets made from rice husks, providing sustainable energy solutions."
  },
  { 
    name: "Biomass Briquettes", 
    image: "/images/Rice/biomass-briquettes.jpg",
    description: "Compressed biomass briquettes offering clean burning and high calorific value."
  },
]

const PRODUCT_OPTIONS: string[] = [
  "Swarna Parboiled Rice",
  "Common Parboiled Rice (Mota)",
  "IR 64 Parboiled Rice",
  "Raw Rice",
  "100 Broken Raw Rice",
  "Puffed Rice (Muri Rice)",
  "Biomass Pellets",
  "Biomass Briquettes"
]

const WHO_ARE_YOU_OPTIONS: string[] = [
  "Retailer/Wholesaler",
  "Exporter",
  "Manufacturer",
  "Consumer"
]

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwPlvsV2gmZVMuAsw34j0mOWfa62QgCJ0rv5SHs-ah0-KbkaS-yEctDSU15wu96hZgd/exec"

export function ProductGrid() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: "", message: "" })
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    lookingFor: [],
    quantity: "",
    whoAreYou: [],
    remarks: ""
  })

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isFormOpen])

  const handleProductClick = (productName: string) => {
    setSelectedProduct(productName)
    setFormData({
      name: "",
      contact: "",
      lookingFor: [productName],
      quantity: "",
      whoAreYou: [],
      remarks: ""
    })
    setIsFormOpen(true)
    setSubmitStatus({ type: "", message: "" })
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setSelectedProduct("")
    setFormData({
      name: "",
      contact: "",
      lookingFor: [],
      quantity: "",
      whoAreYou: [],
      remarks: ""
    })
    setSubmitStatus({ type: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleProductSelect = (product: string) => {
    setFormData(prev => {
      const currentProducts = prev.lookingFor
      if (currentProducts.includes(product)) {
        return { ...prev, lookingFor: currentProducts.filter(p => p !== product) }
      } else {
        return { ...prev, lookingFor: [...currentProducts, product] }
      }
    })
  }

  const handleWhoAreYouSelect = (option: string) => {
    setFormData(prev => {
      const currentOptions = prev.whoAreYou
      if (currentOptions.includes(option)) {
        return { ...prev, whoAreYou: currentOptions.filter(o => o !== option) }
      } else {
        return { ...prev, whoAreYou: [...currentOptions, option] }
      }
    })
  }

  const formatDateTime = () => {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.contact || formData.lookingFor.length === 0 || 
        !formData.quantity || formData.whoAreYou.length === 0) {
      setSubmitStatus({ 
        type: "error", 
        message: "Please fill all required fields" 
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: "", message: "" })

    try {
      const timestamp = formatDateTime()
      const rowData = [
        timestamp,
        "",
        formData.name,
        formData.contact,
        formData.lookingFor.join(", "),
        formData.quantity,
        formData.whoAreYou.join(", "),
        formData.remarks
      ]

      const formDataToSend = new FormData()
      formDataToSend.append('action', 'insert')
      formDataToSend.append('sheetName', 'Products')
      formDataToSend.append('rowData', JSON.stringify(rowData))

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ 
          type: "success", 
          message: `Thank you! Your inquiry has been submitted successfully.` 
        })
        setTimeout(() => {
          handleCloseForm()
        }, 2000)
      } else {
        setSubmitStatus({ 
          type: "error", 
          message: `Failed to submit: ${result.error}` 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: "error", 
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}` 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @media (min-width: 640px) {
          .animate-slideUp {
            animation: fadeIn 0.3s ease-out;
          }
        }

        /* Prevent input zoom on iOS */
        input[type="text"],
        input[type="tel"],
        textarea {
          font-size: 16px !important;
        }

        /* Custom checkbox styling */
        .custom-checkbox:checked {
          background-color: #0f3a5c;
          border-color: #0f3a5c;
        }

        .custom-checkbox:focus {
          ring-color: rgba(15, 58, 92, 0.3);
        }
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {PRODUCTS.map((product, idx) => (
          <Card 
            key={product.name} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white border-amber-100"
            onClick={() => handleProductClick(product.name)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100 mb-3">
                <img
                  src={product.image}
                  alt={`${product.name} - High quality rice processing`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              </div>
              <p className="text-[14px] sm:text-sm md:text-sm text-gray-600 leading-[1.7] sm:leading-relaxed text-justify">
                {product.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {isFormOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fadeIn"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '0',
            paddingTop: 'env(safe-area-inset-top, 0)',
            paddingBottom: 'env(safe-area-inset-bottom, 0)'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseForm()
          }}
        >
          <div 
            className="bg-white w-full sm:max-w-md md:max-w-lg sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col relative animate-slideUp"
            style={{
              height: 'calc(100dvh - 40px)',
              maxHeight: 'calc(100dvh - 40px)',
              background: '#0f3a5c'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 sm:rounded-t-3xl rounded-t-3xl" 
                 style={{ 
                   background: '#0f3a5c',
                   paddingTop: 'max(1rem, env(safe-area-inset-top, 0px))'
                 }}>
              <button
                onClick={handleCloseForm}
                className="absolute right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-20"
                style={{
                  top: 'max(1rem, calc(env(safe-area-inset-top, 0px) + 0.5rem))'
                }}
                type="button"
                aria-label="Close form"
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              <div className="px-5 sm:px-7 pb-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Send Enquiry
                </h2>
                <p className="text-white/80 text-sm sm:text-base">
                  Fill in the details to get a quote
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 hide-scrollbar bg-gray-50">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#0f3a5c' }}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl focus:ring-2 outline-none transition-all text-gray-800 bg-white shadow-sm"
                    style={{ 
                      border: '2px solid #e5e7eb',
                      focusBorderColor: '#0f3a5c'
                    }}
                    placeholder="Enter your name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold mb-2" style={{ color: '#0f3a5c' }}>
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-stretch rounded-xl overflow-hidden shadow-sm bg-white" style={{ border: '2px solid #e5e7eb' }}>
                    <span className="px-3 py-3 text-gray-700 border-r-2 border-gray-200 flex items-center text-sm font-semibold" style={{ background: '#f3f4f6' }}>
                      +91
                    </span>
                    <input
                      id="contact"
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      maxLength={10}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="flex-1 px-3 py-3 outline-none text-gray-800 bg-white"
                      placeholder="10 digit mobile number"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: '#0f3a5c' }}>
                    What are you looking for? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2.5">
                    {PRODUCT_OPTIONS.map((product) => (
                      <label
                        key={product}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all shadow-sm ${
                          formData.lookingFor.includes(product)
                            ? 'shadow-md'
                            : 'hover:shadow-md'
                        }`}
                        style={{
                          backgroundColor: formData.lookingFor.includes(product) ? '#0f3a5c' : '#ffffff',
                          borderColor: formData.lookingFor.includes(product) ? '#0f3a5c' : '#e5e7eb'
                        }}
                      >
                        <input
                          type="checkbox"
                          name="lookingFor"
                          value={product}
                          checked={formData.lookingFor.includes(product)}
                          onChange={() => handleProductSelect(product)}
                          className="w-4 h-4 rounded custom-checkbox flex-shrink-0"
                          style={{
                            accentColor: '#0f3a5c'
                          }}
                        />
                        <span className={`text-sm font-medium flex-1 ${
                          formData.lookingFor.includes(product) ? 'text-white' : 'text-gray-700'
                        }`}>
                          {product}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold mb-2" style={{ color: '#0f3a5c' }}>
                    Required Quantity (in kgs) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl focus:ring-2 outline-none transition-all text-gray-800 bg-white shadow-sm"
                    style={{ 
                      border: '2px solid #e5e7eb'
                    }}
                    placeholder="e.g., 100, 500, 1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: '#0f3a5c' }}>
                    Who are you? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2.5">
                    {WHO_ARE_YOU_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all shadow-sm ${
                          formData.whoAreYou.includes(option)
                            ? 'shadow-md'
                            : 'hover:shadow-md'
                        }`}
                        style={{
                          backgroundColor: formData.whoAreYou.includes(option) ? '#0f3a5c' : '#ffffff',
                          borderColor: formData.whoAreYou.includes(option) ? '#0f3a5c' : '#e5e7eb'
                        }}
                      >
                        <input
                          type="checkbox"
                          name="whoAreYou"
                          value={option}
                          checked={formData.whoAreYou.includes(option)}
                          onChange={() => handleWhoAreYouSelect(option)}
                          className="w-4 h-4 rounded custom-checkbox flex-shrink-0"
                          style={{
                            accentColor: '#0f3a5c'
                          }}
                        />
                        <span className={`text-sm font-medium flex-1 ${
                          formData.whoAreYou.includes(option) ? 'text-white' : 'text-gray-700'
                        }`}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="remarks" className="block text-sm font-semibold mb-2" style={{ color: '#0f3a5c' }}>
                    Remarks (Optional)
                  </label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl focus:ring-2 outline-none transition-all text-gray-800 resize-none bg-white shadow-sm"
                    style={{ 
                      border: '2px solid #e5e7eb'
                    }}
                    placeholder="Any additional information..."
                  />
                </div>

                {submitStatus.message && (
                  <div className={`p-4 rounded-xl text-sm font-semibold shadow-md ${
                    submitStatus.type === "success" 
                      ? "bg-green-100 text-green-800 border-2 border-green-300" 
                      : "bg-red-100 text-red-800 border-2 border-red-300"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="flex-shrink-0 bg-gray-50 px-5 sm:px-7 sm:rounded-b-3xl"
                 style={{
                   paddingTop: '1rem',
                   paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))'
                 }}>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="button"
                className="w-full text-white py-3.5 sm:py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-base sm:text-lg"
                style={{
                  backgroundColor: '#0f3a5c',
                  opacity: isSubmitting ? 0.6 : 1
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}