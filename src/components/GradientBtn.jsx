import { GradientButton } from "@/components/ui/gradient-button"

function GradientBtn() {
  return (
    <div className="flex gap-8">
      <GradientButton> <p className="inter-400">Register Now </p></GradientButton>
      {/* <GradientButton variant="variant">Register Now</GradientButton> */}
    </div>
  )
}

export { GradientBtn }