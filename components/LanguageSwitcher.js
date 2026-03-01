import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useLanguage } from '../contexts/LanguageContext'

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  mn: { name: 'Монгол', flag: '🇲🇳' },
  ko: { name: '한국어', flag: '🇰🇷' },
}

export default function LanguageSwitcher({ size = 'md' }) {
  const { language, changeLanguage } = useLanguage()

  return (
    <Menu>
      <MenuButton
        as={Button}
        p="4"
        color="displayColor"
        fontSize="16px"
        _hover={{ bg: '#111' }}
        _active={{ bg: '#111' }}
        variant="ghost"
      >
        <Text as="span" mr={1}>
          {languages[language].flag}
        </Text>
        {languages[language].name}
        <ChevronDownIcon ml={2} />
      </MenuButton>
      <MenuList bg="secondary" borderColor="borderColor">
        {Object.entries(languages).map(([code, lang]) => (
          <MenuItem
            key={code}
            color="displayColor"
            bg={language === code ? '#111' : 'secondary'}
            _hover={{ bg: '#111' }}
            onClick={() => changeLanguage(code)}
          >
            <Text as="span" mr={2}>
              {lang.flag}
            </Text>
            {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
