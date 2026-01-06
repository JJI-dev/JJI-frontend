'use client'

import { useState } from 'react'
import { motion, Transition } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const sections = [
    {
      id: 'creative-visuals',
      title: 'Creative Visuals',
      subtitle: ['3D', 'Illustration', 'Graphics', 'Video', 'design'],
      iconSrc: '/ne-icon.svg', 
      iconText: 'NE',
      bgColor: 'bg-white',
      textColor: 'text-black',
      link: 'https://ne.jji.kr',
      isExternal: true,
      iconWidth: 193, iconHeight: 131,
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      subtitle: ['Web', 'Mobile', 'Admin'],
      iconSrc: '/mo-icon.svg', 
      iconText: 'MO',
      bgColor: 'bg-white',
      textColor: 'text-black',
      link: 'https://mo.jji.kr',
      isExternal: true,
      iconWidth: 206, iconHeight: 125,
    },
    {
      id: 'project-request',
      title: 'Project Request',
      subtitle: [],
      iconSrc: '/arrow-right.svg', 
      iconText: '',
      bgColor: 'bg-black',
      textColor: 'text-white',
      link: '/project-request',
      isExternal: false,
      iconWidth: 43, iconHeight: 38,
    },
  ]

  // 2. 호버 애니메이션 개선: duration을 더 늘리고 ease를 미세 조정
  const transition: Transition = {
    duration: 1.2, // 지속 시간 증가
    ease: [0.1, 1, 0.4, 1], // 더욱 부드럽고 느린 가속/감속 효과
  }

  return (
    <>
      <section className="snap-section flex box-border">
        <div className="w-full h-full flex"> 
          {sections.map((section, index) => {
            
            let flexClass = 'flex-1'
            if (hoveredSection) {
               if (hoveredSection === section.id) flexClass = 'flex-[2]'
               else flexClass = 'flex-[0.5]' 
            }

            // 각 섹션의 좌우 40px 패딩은 유지 (p-10)
            // 상단 패딩은 0, 하단 패딩은 아이콘 위치 조정을 위해 0으로 변경
            const paddingClass = 'pt-0 pb-0 px-10' 

            const borderClass = index < sections.length - 1 ? (
                index === 1 ? 'border-r-2 border-black' : 'border-r border-gray-300'
            ) : '';

            return (
              <motion.div
                key={section.id}
                className={`
                  relative h-full flex flex-col justify-between 
                  ${paddingClass} 
                  ${borderClass} 
                  ${section.bgColor} ${section.textColor}
                  ${flexClass}
                `}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                transition={transition} 
              >
                {/* 3. 상단 텍스트 영역: mt-[60px] -> mt-[80px]로 늘려 헤더와의 간격 확보 */}
                <div className="mt-[80px]"> 
                  <motion.h2 
                    className="text-[80px] md:text-[96px] font-medium leading-[1.1] mb-8"
                    animate={{ x: hoveredSection === section.id ? 10 : 0 }}
                    transition={transition}
                  >
                    {section.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </motion.h2>
                  
                  {section.subtitle.length > 0 && (
                     <div className="flex flex-col gap-1 text-[20px] font-normal text-gray-400">
                        {section.subtitle.map((s, i) => <span key={i} className='font-normal'>{s}</span>)}
                     </div>
                  )}
                </div>

                {/* 1. 하단 아이콘/텍스트 영역: 아이콘을 하단에 정렬시키고 40px 여백을 부여하여 사진과 동일한 위치로 조정 */}
                <div className={`flex items-end justify-end pb-[40px]`}> 
                    
                    {/* 아이콘에만 링크 적용 */}
                    <Link 
                        href={section.link}
                        target={section.isExternal ? '_blank' : '_self'}
                        rel={section.isExternal ? 'noopener noreferrer' : undefined}
                        className="text-center group" 
                    >
                        <motion.div
                            animate={{
                                scale: hoveredSection === section.id ? 1.1 : 1,
                                y: hoveredSection === section.id ? -10 : 0,
                            }}
                            transition={transition}
                            className='w-fit mx-auto' 
                        >
                            <Image 
                                src={section.iconSrc} 
                                alt={section.iconText || 'Icon'} 
                                width={section.iconWidth} 
                                height={section.iconHeight}
                                // object-bottom을 추가하여 아이콘이 컨테이너 하단에 붙도록 합니다.
                                className='object-contain object-bottom transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1'
                            />
                        </motion.div>
                        
                        {section.iconText && (
                            <div className="text-[32px] font-medium mt-4">{section.iconText}</div>
                        )}
                    </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Section 2: Whitespace & Footer */}
      <section className="snap-section flex flex-col justify-between bg-white w-full"> 
         {/* 상단 공백 영역 */}
         <div className="flex-1"></div>

         {/* 푸터 영역 */}
         <div className="w-full pt-4"> 
            <div className="relative w-full h-[200px]"> 
                <Image 
                  src="/footer-text.svg" 
                  alt="JJINEMO" 
                  fill 
                  className="object-contain object-left-bottom" 
                  priority
                />
            </div>
         </div>
      </section>
    </>
  )
}