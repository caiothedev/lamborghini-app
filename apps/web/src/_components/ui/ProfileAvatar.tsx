import Image from "next/image"

interface ProfileAvatarProps {
    size?: number
}

export default function ProfileAvatar({ size = 30 }: ProfileAvatarProps) {
    return (
        <div className={`rounded-full overflow-hidden shrink-0`} style={{ width: size, height: size }}>
            <Image src="/profile.jpg" alt="Profile Avatar" width={512} height={512} className="w-full h-full object-cover" />
        </div>
    )
}